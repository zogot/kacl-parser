# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
### Changed
### Deprecated
### Removed
### Fixed
### Security

## [1.0.0] - 2022-05-15
### Added
- Added Test job to the Publish Workflow. Tests are now run before a release is made.
- Added some labels to the Dockerfile
### Changed
- Changed Dockerfile to reduce the size of the docker image by ensuring no dev dependencies
- Changed README to provide better content

## [0.0.7] - 2022-05-15
### Removed
- Removed create-release workflow. Not detecting events. Trying as second job instead. Probably better.

## [0.0.6] - 2022-05-15
### Changed
- Changed name of the event for dispatch
### Fixed
- Fixed incorrect client payload values in dispatch and create release

## [0.0.5] - 2022-05-15
### Added
- Added new Create Release workflow
- Added repository-dispatch step to the publish workflow
### Changed
- Changed the name of the 'test' workflow to Manual Run

## [0.0.4] - 2022-05-15
### Added
- Added README.md
- Added Test workflow to manually run
### Removed
- Removed the 'create release' workflow
### Fixed
- Fixed issue with multiline responses

## [0.0.3] - 2022-05-15
### Fixed
- Attempting to fix workflow file

## [0.0.2] - 2022-05-15
### Added
- Initial workflow that will create a release AND use this package to add to it
### Fixed
- Fixed missing parts of the action.yaml

## [0.0.1] - 2022-05-15
### Added
- Initial development release