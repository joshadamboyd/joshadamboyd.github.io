---
---

# Resize logo on scroll
$(window).scroll ->
  scrolled = $(document).scrollTop() > 200
  $('.navbar-brand').toggleClass('smaller', scrolled)
  return


# Menu
overlayNav = $('.cd-overlay-nav')
overlayContent = $('.cd-overlay-content')
navigation = $('.hamburger-menu')
toggleNav = $('.hamburger-trigger')

layerInit = ->
  diameterValue = Math.sqrt($(window).height() ** 2 + $(window).width() ** 2) * 2
  overlayNav.children('span').velocity({
    scaleX: 0
    scaleY: 0
    translateZ: 0
  }, 50).velocity {
    height: diameterValue + 'px'
    width: diameterValue + 'px'
    top: -(diameterValue / 2) + 'px'
    left: -(diameterValue / 2) + 'px'
  }, 0
  overlayContent.children('span').velocity({
    scaleX: 0
    scaleY: 0
    translateZ: 0
  }, 50).velocity {
    height: diameterValue + 'px'
    width: diameterValue + 'px'
    top: -(diameterValue / 2) + 'px'
    left: -(diameterValue / 2) + 'px'
  }, 0
  return

layerInit()
$(window).on 'resize', ->
  window.requestAnimationFrame layerInit
  return
toggleNav.on 'click', ->
  if !toggleNav.hasClass('close-nav')
    toggleNav.addClass 'close-nav'
    overlayNav.children('span').velocity {
      translateZ: 0
      scaleX: 1
      scaleY: 1
    }, 500, 'easeInCubic', ->
      navigation.addClass 'fade-in'
      return
  else
    toggleNav.removeClass 'close-nav'
    overlayContent.children('span').velocity {
      translateZ: 0
      scaleX: 1
      scaleY: 1
    }, 500, 'easeInCubic', ->
      navigation.removeClass 'fade-in'
      overlayNav.children('span').velocity {
        translateZ: 0
        scaleX: 0
        scaleY: 0
      }, 0
      overlayContent.addClass('is-hidden').one 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', ->
        overlayContent.children('span').velocity {
          translateZ: 0
          scaleX: 0
          scaleY: 0
        }, 0, ->
          overlayContent.removeClass 'is-hidden'
          return
        return
      if $('html').hasClass('no-csstransitions')
        overlayContent.children('span').velocity {
          translateZ: 0
          scaleX: 0
          scaleY: 0
        }, 0, ->
          overlayContent.removeClass 'is-hidden'
          return
      return
  return
return
