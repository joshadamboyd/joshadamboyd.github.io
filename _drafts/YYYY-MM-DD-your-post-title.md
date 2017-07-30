---
title: Your Post Title
date: YYYY-MM-DD HH:MM:DD -0500
categories:
  - jekyll
  - update
tags:
  - jekyll
  - update
---

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

##### Header 6

> This is a block quote

1. This is the first item in an ordered list
2. This is the second item in an ordered list

- This is the first item in an unordered list
- This is the second item in an unordered list

* This is the first item in an unordered list
* This is the second item in an unordered list

+ This is the first item in an unordered list
+ This is the second item in an unordered list

1. This is the first item in an ordered list
1. This is the second item in an ordered list

*   This is a list item with two paragraphs.

    This is the second paragraph in the list item. You're
only required to indent the first line. Lorem ipsum dolor
sit amet, consectetuer adipiscing elit.

*   Another item in the same list.

* * *

***

*****

- - -

---------------------------------------

[This link](http://example.com/ "Title") has a title attribute.

[This link](http://example.com/) has no title attribute.

[This link][example] has a reference.

*single asterisks*

_single underscores_

**double asterisks**

__double underscores__

`inline code`

```
code block
code block
```

![Alt text](/path/to/img.jpg)

![Alt text](/path/to/img.jpg "Optional title")

<http://example.com/>

\*literal asterisks\*

[example]: http://example.com/  "Optional Title Here"

Video Links

{% include videos/vimeo.html id="1234567" %} - This is a vimeo link

{% include videos/youtube.html id="123abc" %} - This is a youtube link

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
