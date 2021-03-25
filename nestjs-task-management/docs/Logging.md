# Logging

## Types of Logs

- _Log_: General purpose logging of important information
- _Warning_: Unhandled issue that is NOT fatal or destructive.
- _Debug_: Useful information that can help us debug the logic in case of an error/warning. Intended for developers.
- _Verbose_: Information providing insights about the behavior of the application. Intended for operators (for example, support). Usually "too much information".

## Log Levels

You could define multiple log levels for different environments. For example:

|             | Log | Error | Warning | Debug | Verbose |
| :---------: | :-: | :---: | :-----: | :---: | :-----: |
| Development |  x  |   x   |    x    |   x   |    x    |
|   Staging   |  x  |   x   |    x    |       |         |
| Production  |  x  |   x   |         |       |         |
