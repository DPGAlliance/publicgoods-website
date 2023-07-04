[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)

# Digital Public Goods website
Static version of the [Digital Public Goods website](https://digitalpublicgoods.net).

This repo is one of four interconnected repositories that are used to manage the generation of this static site:
- [publicgoods-wordpress](https://github.com/unicef/publicgoods-wordpress): Private Wordpress site that provides the overall structure of the site, as well as the theming. This site can be run locally on any machine and crawled to get a preliminary static snapshot. This is where content gets added or updated for most of the website.
- [publidgoods-api](https://github.com/DPGAlliance/publicgoods-api): REST API with the information for all approved digital public goods coming from the DPG Nominations and Review [web app](https://github.com/DPGAlliance/publicgoods-review-webapp) database. This endpoint is fetched by [publicgoods-scripts](https://github.com/unicef/publicgoods-scripts) to feed the [DPG Registry](https://digitalpublicgoods.net/registry/) page.
- [publicgoods-scripts](https://github.com/unicef/publicgoods-scripts): Holds various scripts for crawling the WordPress version and generating the static snapshot, as well as generating the HTML page for the [DPG Registry](https://digitalpublicgoods.net/registry/), [DPGA Roadmap](https://digitalpublicgoods.net/roadmap/), [Map Visualization](https://digitalpublicgoods.net/map/), [Eligibility Form](https://digitalpublicgoods.net/eligibility/) and redirects for the [DPG Help Center](https://digitalpublicgoods.net/helpcenter/) and [DPG Community Center](https://digitalpublicgoods.net/community).
- [publicgoods-website](https://github.com/unicef/publicgoods-website): Holds the static version of the site available at https://digitalpublicgoods.net served through Github Pages which integrates all previous sources. Leverages Github Content Delivery Network (CDN) for great availability worldwide.

## Deployment
The DPGA website gets automatically built and deployed every night at midnight GMT to keep it up to date from changes made in any of the sources. It can also be manually triggered through GitHub Actions.
![image](https://github.com/DPGAlliance/publicgoods-website/assets/18178248/4d68b726-9e7e-4e71-a253-5f606eda1a77)

## How to contribute and/or request changes

- Submit new candidates for Digital Public Goods opening a Pull Request to the [publidgoods-candidates](https://github.com/unicef/publicgoods-candidates) repo.
- Submit issues or Pull Requests to change any other content of the site to the [publicgoods-wordpress](https://github.com/unicef/publicgoods-wordpress) repo.
