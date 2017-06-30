# Rootpath Training Site

Rootpath public training courses. See <http://training.rootpath.io>.

Build on Jekyll and deployed to github pages.

To run in development:

```shell
bundle install
bundle exec jekyll s
```

To deploy:

```shell
jekyll b -d ./docs # Builds the static site in /docs.
git push origin master
```
