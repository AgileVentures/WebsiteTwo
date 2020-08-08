# WebsiteTwo

This is a complete redesign of the
[WebsiteOne project](https://github.com/AgileVentures/WebsiteOne),
currently serving as AgileVentures'
[website](https://www.agileventures.org).

It is being rewritten as a static site generated with [Gatsby](https://www.gatsbyjs.org).

## Requirements

This website is made with Gatsby, refer to the
[Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-zero/)
for up-to-date instructions on how to prepare your environment.

## Quick start

1. **Clone the repository**

```
git clone https://github.com/AgileVentures/WebsiteTwo

cd  WebsiteTwo
```

2. **Install dependencies**

```
yarn
```

3. **Run the tests**

Unit tests can be run with:

```
yarn test
```

<!-- Waiting for the related PR to be merged
You can run the end-to-end tests in your browser with:

```
yarn test:e2e
```

or you can run them in your cli with:
```
yarn test:e2e:ci
```
-->

4. **Run the local server**

```
gatsby develop
```

## Contributing to the project

If you wanted to contribute to the project that would be awesome!
Please read the [CONTRIBUTING](https://github.com/AgileVentures/WebsiteTwo/blob/develop/CONTRIBUTING.md)
file for information on how we work.

## History

in 2011, inspired by Dave Patterson and Armando Fox's UCBerkeley Software
Engineering Massive Open Online Class (MOOC), Sam Joseph had the idea for a
global online pairing community where everyone worked together to use the agile
development methodology to deliver solutions to IT charities and non-profits.
Thomas Ochman joined as project manager and led the development of the
WebSiteOne codebase with Bryan Yap serving as technical lead. Initialy Sam was
the notional "client", not getting involved in the tech development, and many
different volunteers contributed code. During this phase the events, projects
and user systems were developed. There was also a blog like articles system.
Yaro Appletov led a tight integration with Google hangouts to allow recordable
hangouts to be launched from the site and report back telemetry.

Later Raoul Diffou joined to take over as project manager as Thomas and Bryan
had less and less time for the project. Sam took over the technical lead role
in 2016 and also stared pairing with Raoul as project manager. Later in 2016
as Raoul had less and less time Sam became the sole project manager. During
the course of 2016 Sam and long time AV contributor Michael revised the events
framework, and replaced the articles system with a Premium payments framework
intended to help ensure AV was sustainable into the future. In 2017 Google
withdrew their Hangouts API breaking various functionality in the site. Sam
and Lokesh Sharma replaced the API integration with manual updates, and Sam
pulled in the agile-bot node microservice so that WSO now communicates directly
with Slack to alert members about new online meetings and their recordings.

In 2020, as AgileVentures was undergoing a deep change in its structure and
organization, it was decided that it was time to re-think the AV website from
the ground up, moving some of functionalities in outside services and follow a
simpler, faster and slicker approach for the website.
