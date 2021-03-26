# Configuration

- Central way of defining values that are loaded **upon starting the application** (should not be changed during runtime).
- Configuration per environment - development, staging, production etcetera.
- Configuration can be defined in the code base. Useful if you work with multiple developers via version control.
- Configuration can be defined in the code base. Useful if you wokr with multiple developers via version control. Your configuration **should** always work for with the code it ships with.
- Can be defined in many ways (JSON, YAML, XML, Environment Variables, etc) using custom solutions or open-source libraries.

## Codebase VS Environment Variables

You should define configuration in your codebase. For example, in a **config** folder.
You could also support configuring values via **environment variables** (which are provided when running the application).

### Example

Non-sensitive information such as the port to run the application on, will be defined in the code base.
Sensitive information such as database username and password **for production mode**, will be provided via environment variables upon running the application.
