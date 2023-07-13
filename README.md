# OpenAI CLI Assistant

This is a small, revamped project to further explore the OpenAI API by creating a refined CLI in JavaScript. It's now owned and maintained by KnowmeGPT.

* [Essentials](#things-youll-need)
* [Usage](#usage)
* [Contributors](#contributing)
  * [Code of Conduct](#code-of-conduct)
* [License](#license)

## Essentials

To interact with the OpenAI API you will need an [OpenAI platform account](https://platform.openai.com/overview). Once you've signed up, [create an API key](https://platform.openai.com/account/api-keys) from your account dashboard.

## Usage

Clone the repo and navigate to the new directory:

``
git clone https://github.com/KnowmeGPT/openai-cli-assistant.git
cd openai-cli-assistant
``
Then install the dependencies:

``
npm install
``
With the following command, you can initialize the assistant: 

``
OPENAI_API_KEY=YOUR_OPENAI_API_KEY node index.js
``
Alternatively, you can duplicate the `.env.example` to `.env` and enter your API key. Then execute the following command to start the assistant:

``
npm start
``
You now can converse with your assistant. Start by providing a system instruction for the preferred behavior. Follow through by chatting with the assistant on the command line.

## Contributors

1. Fork the repository ( https://github.com/KnowmeGPT/open