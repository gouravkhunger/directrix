# directrix

An API to setup custom domain branded link shortener/redirector easily. It turns a simple json file like this:

```json
{
  "gourav": "https://gouravkhunger.me",
  "home": "https://github.com/gouravkhunger/directrix"
}
```

to a rebranded link redirection website. Try these out:

- https://directrix.gouravkhunger.me/home
- https://directrix.gouravkhunger.me/gourav

## When to use?

Best for links that you want to rebrand under your own domain (for free). `go.example.com/xyz` and `link.example.com/product` are various ways links are generally rebranded.

This API lets you create such links effortlessly. I personally use it to host redirects for links on my [portfolio site](https://gouravkhunger.me).

## Guided setup process

This Express.js API can be hosted anywhere node is supported.To setup this API completely for free, I would suggest you to use [Deta](https://www.deta.sh).

Once you create an account at Deta, you will need to create a new micro. Run these commands in your terminal in order:

```sh
curl -fsSL https://get.deta.dev/cli.sh | sh
# for windows: iwr https://get.deta.dev/cli.ps1 -useb | iex

deta new --node micro_name # name also doesn't matter much
```

To begin with deploying the API, you will need your [Deta Access token](https://docs.deta.sh/docs/cli/auth#deta-access-tokens). Please go to your profile and create one before proceeding.

1. Press the green "Use this template" button to create a copy of this project under your profile:

<img src="https://user-images.githubusercontent.com/46792249/197363275-b70c7d0b-5db9-45e2-99db-4d5ec92a8aff.png" width="200px" />

<img src="https://user-images.githubusercontent.com/46792249/197363295-4b036d3f-61b1-4b2b-8b29-a2dca1891e47.png" width="600px" />

2. Go to the Project Settings of this newly created repo.

From the sidebar, navigate to `Secrets` > `Actions` > `New repository secret`. Enter the `Name` of the secret and `DETA_TOKEN` and paste the access token to the `Secret` field.

<img src="https://user-images.githubusercontent.com/46792249/197364107-aac5b959-cc0a-4a46-be2f-d0d39d2cfabb.png" width="700px" />

3. Edit the `deploy.yml` file under `.github/workflows/` folder to update the project and micro name you have on your Deta dashboard.

Save the changes by pressing "Commit changes".

4. Edit the `links.json` file and define however many routes you want.

Each route should's value should be a valid internet link (unless you want errors of course). These will automatically become routes and have redirection logic implemented.

Save the changes by pressing "Commit changes":

<img src="https://user-images.githubusercontent.com/46792249/197363808-187b0b6d-3831-4cd0-91d9-80ac0d46b90a.png" width="500px" />

5. The [GitHub Action](https://github.com/gouravkhunger/directrix/blob/main/.github/workflows/deploy.yml) will deploy the API automatically.

Once it is completed, you will see a green checkmark next to the latest commit on the repo. Head over to Deta Dashboard, choose the micro you created and there you will be able to [setup a custom domain](https://docs.deta.sh/docs/micros/custom_domains) for your API.

That's it. Enjoy!

## License

```
MIT License

Copyright (c) 2022 Gourav Khunger

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
