# zogot/kacl-parser

This action extracts the specified release from a provided Keep a Changelog file.

## Inputs

## `path`

The path to the Changelog file. Including filename.

*Default* `/github/workspace/CHANGELOG.md`

## `version`

**Required** The version you wish to extract from your Changelog. Should match the SemVer string
in the Changelog Release section.

## Outputs

## `release`

The contents of that release changelog.

## Example usage

```
steps:
  - name: Extract version
    id: kacl
    uses: zogot/kacl-parser@v0.0.3
    with:
      version: ${{ github.ref_name }}
    
  - name: 'Create the release'
    uses: softprops/action-gh-release@v1
    with:
      body: ${{ steps.kacl.outputs.release }}
```