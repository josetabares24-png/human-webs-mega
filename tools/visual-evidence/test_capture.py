import json
import subprocess
import sys
import unittest
from pathlib import Path
from capture import valid_url, validate_config

HERE = Path(__file__).parent

class VisualCaptureConfigTests(unittest.TestCase):
    def setUp(self):
        self.config = {
            "project": "test",
            "pages": {
                "home": {"baseline": "https://example.org/", "candidate": "http://localhost:3000/"},
                "interior": {"baseline": "https://example.org/guia", "candidate": "http://127.0.0.1:3000/guia"},
            },
        }

    def test_valid_https_and_localhost_only(self):
        self.assertTrue(valid_url("https://example.org/"))
        self.assertTrue(valid_url("http://localhost:3000/a"))
        self.assertTrue(valid_url("http://127.0.0.1:3000/a"))
        for url in ["http://example.org/", "file:///tmp/x", "javascript:alert(1)",
                    "https://user:pass@example.org/", "https://example.org/#auth", ""]:
            self.assertFalse(valid_url(url), url)

    def test_requires_home_and_interior_per_stage(self):
        self.assertIs(validate_config(self.config, "baseline"), self.config)
        self.assertIs(validate_config(self.config, "candidate"), self.config)
        self.config["pages"].pop("interior")
        with self.assertRaises(ValueError):
            validate_config(self.config, "baseline")

    def test_invalid_project_or_stage_url(self):
        self.config["project"] = ""
        with self.assertRaises(ValueError):
            validate_config(self.config, "baseline")
        self.config["project"] = "test"
        self.config["pages"]["home"]["candidate"] = "http://example.net/"
        with self.assertRaises(ValueError):
            validate_config(self.config, "candidate")

    def test_check_config_does_not_require_browser(self):
        for stage in ("baseline", "candidate"):
            done = subprocess.run([
                sys.executable, str(HERE / "capture.py"), "--config",
                str(HERE / "example.config.json"), "--stage", stage,
                "--out", str(HERE / "not-created"), "--check-config"
            ], capture_output=True, text=True)
            self.assertEqual(done.returncode, 0, done.stderr)
            self.assertIn("no se tomaron capturas", done.stdout)

if __name__ == "__main__":
    unittest.main()
