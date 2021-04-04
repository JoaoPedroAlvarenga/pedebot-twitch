
<h1 align='center'>
  <img align='center' src="https://static-cdn.jtvnw.net/jtv_user_pictures/5737219e-3984-400d-877c-bff9003a05ac-profile_image-70x70.png">

  <p>pedebot</p>
</h1>


<p align='center'>
<a href="https://github.com/joaopedroaats/pedebot-twitch/releases"><!--
--><img src="https://img.shields.io/github/package-json/v/joaopedroalvarenga/pedebot-twitch?style=flat-square&logo=twitch&colorA=333333&colorB=707070" alt="version"><!--
--></a>
<a href="https://github.com/joaopedroaats/pedebot-twitch/fork"><!--
--><img src="https://img.shields.io/static/v1?style=flat-square&label=&message=fork&logo=github&colorA=333333&colorB=707070" alt="fork"><!--
--></a>
</p>



- [Install](#install)
- [Config](#config)
- [Documentation](#documentation)

## Install

1. Clone the repository
2. Install modules with `yarn install` or `npm install`

## Config

1. Create a file named .env
2. Get your oauth [here](https://twitchapps.com/tmi/)
3. Configure `.env` file

```
BOT_USERNAME=yourBotName
OAUTH_TOKEN=yourOauth
CHANNEL_NAME=yourChannelName
```
4. Configure `config.json` file

```json
{
  "commands": {
    "twitter":    ["twitter.com",                       "Twitter link"  ],
    "instagram":  ["instagram.com",                     "Instagram link"],
    "git":        ["github.com/joaopedroaats",          "Git link"  ,{
        "bot":      "github.com/joaopedroaats/pedebot-twitch",
        "dotfiles": "github.com/joaopedroaats/dotfiles",
        "dots":     "github.com/joaopedroaats/dotfiles"
    }]
  },
  "specialKey": "!"
}

// user: !twitter
// bot:  twitter.com
```

## Docs

- [tmi.js](https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Commands.md) v1.4.2
- [dev.twitch](https://dev.twitch.tv/docs/irc)
