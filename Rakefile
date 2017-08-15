require "html-proofer"

task :test do
  sh "bundle exec jekyll build"

  # https://github.com/gjtorikian/html-proofer#configuration
  options = {
    allow_hash_href: true,
    assume_extension: true,
    check_favicon: true,
    check_html: true,
    empty_alt_ignore: true
  }

  HTMLProofer.check_directory("./_site", options).run
end
