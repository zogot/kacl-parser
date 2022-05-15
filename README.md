# zogot/kacl-parser

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/zogot/kacl-parser/Publish%20a%20Docker%20Image)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/zogot/kacl-parser)

This docker image extracts the specified release from a provided Keep a Changelog file.

Can also be used directly as an image published to GitHub Packages: https://github.com/zogot/kacl-parser/pkgs/container/kacl-parser

## Usage as GitHub Action

You can use this repository as a Docker Action that can be combined with other Docker actions to get you the specific
Changelog Release contents that you can append to specific files or, for example, to the GitHub Release body contents.

### Inputs

| Name          | Description                                                                                                                     | Required | Default                        |
|---------------|---------------------------------------------------------------------------------------------------------------------------------|----------|--------------------------------|
| version       | The version that you wish to extract from the Changelog. Should be a SemVer version. Supports with or without 'v'               | Yes      |                                |
| path          | The path to the Changelog file. Including the filename. By default it uses the path from the mounted directory from a checkout. | No       | /github/workspace/CHANGELOG.md |
| halt-on-error | If it should halt on error? Default is true. If false, and an error is given, an empty string is provided in place of errors    | No       | true                           |

### Outputs

| Name    | Description                                                      |
|---------|------------------------------------------------------------------|
| release | The contents of the release if it exists. Else it will return '' |

### Example usage

```
steps:
  - name: Extract version
    id: kacl
    uses: zogot/kacl-parser@1.0.0
    with:
      version: ${{ github.ref_name }}
    
  - name: 'Create the release'
    uses: softprops/action-gh-release@v1
    with:
      body: ${{ steps.kacl.outputs.release }}
```