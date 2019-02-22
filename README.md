# Digital Public Goods website
Static version of the [Digital Public Goods website](https://digitalpublicgoods.net).

This repo is one of four interconnected repositories that are used to manage the generation of this static site:
- [publicgoods-wordpress](https://github.com/unicef/publicgoods-wordpress): Offline Wordpress site that provides the overall structure of the site, as well as the theming. This site can be run locally on any machine, and crawled to get a preliminary static snapshot. It will never be online by itself.
- [publidgoods-candidates](https://github.com/unicef/publicgoods-candidates): Manages the list of candidates for Digital Public Goods as individual `.json` files. New candidates can be added as Pull Requests. Each new commit triggers a new build of the static site.
- [publicgoods-scripts](https://github.com/unicef/publicgoods-scripts): Holds various scripts for crawling the wordpress version and generating the static snapshot, and generating the HTML page for the candidates pulling all the candidates `.json` files from the previous repository
- [publicgoods-website](https://github.com/unicef/publicgoods-website): Holds the static version of the site available at https://digitalpublicgoods.net served through Github Pages. Leverages Github Content Delivery Network (CDN) for great availability worldwide, and makes it virtually impossible to hack this site.

## How to contribute and/or request changes

- Submit new candidates for Digital Public Goods opening a Pull Request to the [publidgoods-candidates](https://github.com/unicef/publicgoods-candidates) repo.
- Submit issues or Pull Requests to change any other content of the site to the [publicgoods-wordpress](https://github.com/unicef/publicgoods-wordpress) repo.
