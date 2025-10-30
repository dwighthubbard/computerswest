import subprocess
import tempfile
import unittest
from pathlib import Path


class MkDocsBuildTest(unittest.TestCase):
    def test_mkdocs_can_build(self):
        repo_root = Path(__file__).resolve().parents[1]

        with tempfile.TemporaryDirectory() as tmp_dir:
            site_dir = Path(tmp_dir) / "site"

            subprocess.run(
                [
                    "mkdocs",
                    "build",
                    "--clean",
                    "--site-dir",
                    str(site_dir),
                ],
                cwd=repo_root,
                check=True,
            )
