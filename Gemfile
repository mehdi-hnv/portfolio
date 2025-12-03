source "https://rubygems.org"
gem "jekyll", "~> 4.3.0"
gem "minima", "~> 2.5"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag", "~> 2.8"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", install_if: Gem.win_platform?

# Lock `http_parser.rb` to `v0.6.x` on JRuby builds, because newer versions of this gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]
