Safe Menu+ Translations
=======================

Safe Menu+ is a free service that helps anyone's business to digitalize the menus. From restaurants to bars or locals, anyone can opt-in for free.

During the Development, the need of globalizing this service is needed. Fighting SARS-CoV-2 means we should all act like one and win like one.

Not everybody has access to English, but anyone should have access to safety.

This repo contains all the translation files needed. If you wish to help, just open a PR with the new additions or changes.

## Getting started

We are using for now only 3 websites:
- main website (https://safemenu.org)
- dashboard website (https://dashboard.safemenu.org)
- menu website (https://menu.safemenu.org)

Each of the 3 websites have their own folder, in which you will find JSON files.

Each JSON will be named after the ISO 639-1 code. A list with the ISO codes can be found [here](https://www.loc.gov/standards/iso639-2/php/code_list.php).

For territory-related language differences, like Portugal's portugese and Brazil's portugese, separate the file names with dash: `pt-br` and `pt-pt`.

The files contain key-value pairs where the key is the English translation and the key is the translated version of that sentence/set.

## Submitting manually

For non-tech savys that do not know how to work with JSON (understandable!!!), you can download the `translations.txt` file and fill it up with the translated
data and then submit it via mail at: alex@renoki.org.

## 🐛 Testing

Testing passes based on the fact that the JSON has correct syntax and is in-sync with each and other.

You will need Node.js to test the JSON files. Typically, this will be ran on each PR, but you can do it manually, locally:

``` bash
$ node test.js
```

## 🤝 Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## 🔒  Security

If you discover any security related issues, please email alex@renoki.org instead of using the issue tracker.

## 🎉 Credits

- [Alex Renoki](https://github.com/rennokki)
- [All Contributors](../../contributors)

## 📄 License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
