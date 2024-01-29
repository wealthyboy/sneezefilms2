'use strict';

jQuery(document).ready(function($) {
  //woosw_load_count();

  // add
  $('body').on('click touch', '.woosw-btn', function(e) {
    var _this = $(this);
    var product_id = _this.attr('data-id');
    var data = {
      action: 'wishlist_add',
      product_id: product_id,
    };
    if (_this.hasClass('woosw-added')) {
      if (woosw_vars.button_action_added === 'page') {
        // open wishlist page
        window.location.href = woosw_vars.wishlist_url;
      } else {
        // open wishlist popup
        if ($('#woosw-area .woosw-content-mid').
            hasClass('woosw-content-loaded')) {
          woosw_show();
        } else {
          woosw_load();
        }
      }
    } else {
      _this.addClass('woosw-adding');
      $.post(woosw_vars.ajax_url, data, function(response) {
        _this.removeClass('woosw-adding');
        response = JSON.parse(response);
        if ((
            response['status'] == 1
        ) && woosw_vars.button_action !== 'message') {
          $('#woosw-area').removeClass('woosw-message');
          $('#woosw-area .woosw-content-mid').
              html(response['value']).
              removeClass('woosw-content-loaded-message').
              addClass('woosw-content-loaded').
              perfectScrollbar({theme: 'wpc'});
          if (response['notice'] != null) {
            $('#woosw-area .woosw-notice').html(response['notice']);
            woosw_notice_show();
            setTimeout(function() {
              woosw_notice_hide();
            }, 3000);
          }
        } else {
          $('#woosw-area').addClass('woosw-message');
          var message = '<div class="woosw-content-mid-message">';
          if (response['image'] != null) {
            message += '<img src="' + response['image'] + '"/>';
          }
          if (response['notice'] != null) {
            message += '<span>' + response['notice'] + '</span>';
          }
          message += '</div>';
          $('#woosw-area .woosw-content-mid').
              html(message).
              removeClass('woosw-content-loaded').
              addClass('woosw-content-loaded-message');
        }
        if (response['status'] == 1) {
          _this.addClass('woosw-added').html(woosw_vars.button_text_added);
        }
        if (response['count'] != null) {
          woosw_change_count(response['count']);
        }
        woosw_show();
      });
    }
    e.preventDefault();
  });

  // remove
  $('body').on('click touch', '.woosw-content-item--remove span', function(e) {
    var _this = $(this);
    var _this_item = _this.closest('.woosw-content-item');
    var product_id = _this_item.attr('data-id');
    var data = {
      action: 'wishlist_remove',
      product_id: product_id,
    };
    _this.addClass('removing');
    $.post(woosw_vars.ajax_url, data, function(response) {
      _this.removeClass('removing');
      _this_item.remove();
      response = JSON.parse(response);
      if (response['status'] == 1) {
        $('.woosw-btn-' + product_id).
            removeClass('woosw-added').
            html(woosw_vars.button_text);
        if (response['notice'] != null) {
          $('#woosw-area .woosw-notice').html(response['notice']);
          woosw_notice_show();
          setTimeout(function() {
            woosw_notice_hide();
          }, 3000);
        }
      } else {
        if (response['notice'] != null) {
          $('#woosw-area .woosw-content-mid').
              html('<div class="woosw-content-mid-notice">' +
                  response['notice'] + '</div>');
        }
      }
      if (response['count'] != null) {
        woosw_change_count(response['count']);
      }
    });
    e.preventDefault();
  });

  // click on area
  $('body').on('click touch', '#woosw-area', function(e) {
    var woosw_content = $('.woosw-content');
    if ($(e.target).closest(woosw_content).length == 0) {
      woosw_hide();
    }
  });

  // continue
  $('body').on('click touch', '.woosw-continue', function(e) {
    var url = $(this).attr('data-url');
    woosw_hide();
    if (url !== '') {
      window.location.href = url;
    }
    e.preventDefault();
  });

  // close
  $('body').on('click touch', '.woosw-close', function(e) {
    woosw_hide();
    e.preventDefault();
  });

  // menu item
  $('body').on('click touch', '.woosw-menu-item a', function(e) {
    if (woosw_vars.menu_action === 'open_popup') {
      if ($('#woosw-area .woosw-content-mid').
          hasClass('woosw-content-loaded')) {
        woosw_show();
      } else {
        woosw_load();
      }
      e.preventDefault();
    }
  });

  // copy link
  $('body').on('click touch', '#woosw_copy_url, #woosw_copy_btn', function(e) {
    woosw_copy_to_clipboard('#woosw_copy_url');
  });

  // add note
  $('body').on('click touch', '.woosw-content-item--note', function() {
    if ($(this).
        closest('.woosw-content-item').
        find('.woosw-content-item--note-add').length) {
      $(this).
          closest('.woosw-content-item').
          find('.woosw-content-item--note-add').
          show();
      $(this).hide();
    }
  });

  $('body').on('click touch', '.woosw_add_note', function() {
    var _this = $(this);
    var product_id = _this.closest('.woosw-content-item').attr('data-id');
    var woosw_key = _this.closest('.woosw-content-item').attr('data-key');
    var note = _this.closest('.woosw-content-item').find('textarea').val();
    var data = {
      action: 'add_note',
      woosw_key: woosw_key,
      product_id: product_id,
      note: woosw_html_entities(note),
    };
    jQuery.post(woosw_vars.ajax_url, data, function(response) {
      _this.closest('.woosw-content-item').
          find('.woosw-content-item--note').
          html(response).show();
      _this.closest('.woosw-content-item').
          find('.woosw-content-item--note-add').hide();
    });
  });
});

jQuery(window).resize(function() {
  woosw_fix_height();
});

function woosw_load() {
  var data = {
    action: 'wishlist_load',
  };
  jQuery.post(woosw_vars.ajax_url, data, function(response) {
    jQuery('#woosw-area').removeClass('woosw-message');
    response = JSON.parse(response);
    if (response['status'] == 1) {
      jQuery('#woosw-area .woosw-content-mid').html(response['value']);
    } else {
      if (response['notice'] != null) {
        jQuery('#woosw-area .woosw-content-mid').
            html('<div class="woosw-content-mid-notice">' + response['notice'] +
                '</div>');
      }
    }
    jQuery('#woosw-area .woosw-content-mid').
        removeClass('woosw-content-loaded-message').
        addClass('woosw-content-loaded').
        perfectScrollbar({theme: 'wpc'});
    woosw_show();
  });
}

function woosw_load_count() {
  var data = {
    action: 'wishlist_load',
  };
  jQuery.post(woosw_vars.ajax_url, data, function(response) {
    response = JSON.parse(response);
    if (response['count'] != null) {
      woosw_change_count(response['count']);
    }
  });
}

function woosw_show() {
  jQuery('#woosw-area').addClass('woosw-open');
  jQuery(document.body).trigger('woosw_show');
  woosw_fix_height();

  if (jQuery('#woosw-area').hasClass('woosw-message')) {
    // timer
    var woosw_counter = 6;
    var woosw_interval = setInterval(function() {
      woosw_counter--;
      jQuery('.woosw-close').html('Close in ' + woosw_counter + 's');
      if (woosw_counter === 0) {
        woosw_hide();
        jQuery('.woosw-close').html('');
        clearInterval(woosw_interval);
      }
    }, 1000);
  }
}

function woosw_hide() {
  jQuery('#woosw-area').removeClass('woosw-open');
  jQuery(document.body).trigger('woosw_hide');
}

function woosw_change_count(count) {
  jQuery('#woosw-area .woosw-count').html(count);

  if (jQuery('.woosw-menu-item .woosw-menu-item-inner').length) {
    jQuery('.woosw-menu-item .woosw-menu-item-inner').attr('data-count', count);
  } else {
    jQuery('.woosw-menu-item a').
        html('<span class="woosw-menu-item-inner" data-count="' + count +
            '"><i class="woosw-icon"></i><span>Wishlist</span></span>');
  }

  jQuery(document.body).trigger('woosw_change_count', [count]);
}

function woosw_notice_show() {
  jQuery('#woosw-area .woosw-notice').addClass('woosw-notice-show');
}

function woosw_notice_hide() {
  jQuery('#woosw-area .woosw-notice').removeClass('woosw-notice-show');
}

function woosw_fix_height() {
  if ((
      woosw_vars.button_action !== 'message'
  ) && (
      jQuery('#woosw-area').find('.woosw-content-items').length
  )) {
    var woosw_window_height = jQuery(window).height();
    var $woosw_content = jQuery('#woosw-area').find('.woosw-content');
    var $woosw_table = jQuery('#woosw-area').find('.woosw-content-items');
    var woosw_content_height = $woosw_table.outerHeight() + 96;
    if (
        woosw_content_height < (
            woosw_window_height * .8
        )) {
      if (parseInt(woosw_content_height) % 2 !== 0) {
        $woosw_content.height(parseInt(woosw_content_height) - 1);
      } else {
        $woosw_content.height(parseInt(woosw_content_height));
      }
    } else {
      if ((
          parseInt(woosw_window_height * .8)
      ) % 2 !== 0) {
        $woosw_content.height(parseInt(woosw_window_height * .8) - 1);
      } else {
        $woosw_content.height(parseInt(woosw_window_height * .8));
      }
    }
  }
}

function woosw_copy_url() {
  var wooswURL = document.getElementById('woosw_copy_url');
  wooswURL.select();
  document.execCommand('copy');
  alert(woosw_vars.copied_text + ' ' + wooswURL.value);
}

function woosw_copy_to_clipboard(el) {
  // resolve the element
  el = (typeof el === 'string') ? document.querySelector(el) : el;

  // handle iOS as a special case
  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    // save current contentEditable/readOnly status
    var editable = el.contentEditable;
    var readOnly = el.readOnly;

    // convert to editable with readonly to stop iOS keyboard opening
    el.contentEditable = true;
    el.readOnly = true;

    // create a selectable range
    var range = document.createRange();
    range.selectNodeContents(el);

    // select the range
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    el.setSelectionRange(0, 999999);

    // restore contentEditable/readOnly to original state
    el.contentEditable = editable;
    el.readOnly = readOnly;
  } else {
    el.select();
  }

  // execute copy command
  document.execCommand('copy');

  // alert
  alert(woosw_vars.copied_text + ' ' + el.value);
}

function woosw_html_entities(str) {
  return String(str).
      replace(/&/g, '&amp;').
      replace(/</g, '&lt;').
      replace(/>/g, '&gt;').
      replace(/"/g, '&quot;');
}