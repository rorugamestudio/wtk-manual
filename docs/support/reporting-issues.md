---
icon: lucide/bug
---

# Reporting Issues

Before opening a new issue, :lucide-search: [search the existing ones](https://github.com/rorugamestudio/wtk-manual/issues?q=is%3Aissue) in case it has already been reported.

| I want to... | Use |
|---|---|
| :lucide-bug: Report something that doesn't work | [Bug Report](https://github.com/rorugamestudio/wtk-manual/issues/new?template=bug_report.yml) |
| :lucide-lightbulb: Suggest a new feature or an improvement | [Feature Request](https://github.com/rorugamestudio/wtk-manual/issues/new?template=feature_request.yml) |
| :lucide-file-pen: Report a mistake or a gap in this manual | [Documentation](https://github.com/rorugamestudio/wtk-manual/issues/new?template=documentation.yml) |
| :lucide-circle-help: Ask how to do something | [Question](https://github.com/rorugamestudio/wtk-manual/issues/new?template=question.yml) |

## :lucide-list-checks: Writing a good bug report

- :lucide-tag: **Versions.** The World Toolkit version, the Unity version and the render pipeline you use.
- :lucide-list-ordered: **Steps to reproduce.** Start from a new scene when you can, and list every step.
- :lucide-scale: **Expected and actual result.** What you thought would happen, and what happened instead.
- :lucide-video: **Screenshots or a short video.** Especially for anything visible in the Scene view, including screenshots of your Inspector setup.
- :lucide-paperclip: **Reproduction assets.** Whenever possible, attach files that help reproduce the issue: a minimal reproduction scene, relevant assets (such as `.emeshes`, profiles, or textures), or an exported package.
- :lucide-terminal: **Console errors.** Copy the full message, including the stack trace, from the Unity Console.

!!! tip "Junction problems"
    For a problem with a road junction, right-click its junction component, choose **Export Junction Information...** and attach the text file it saves. See [Junctions](../roads/junctions.md).
