var all_words = new Array();

$(document).ready(function(){
  return_word();
  find_replace();
});

function replace_word(word) {
	$("*").contents().each(function() {
    if(this.nodeType == 3) {
      this.nodeValue = this.nodeValue.replace(word, "clowning");
    }

	});
}	

function return_word() {
	var all_text = $('body').text();
  all_text = inner_trim(all_text);

  all_text = all_text.replace(/(\r\n|\n|\r)/gm,' ');

  all_words = all_text.split(' ');
}

function inner_trim(text_str) {
	if(text_str.search(/\s{2}/) == -1){
    //we didn't find double spaces
  } else {
    text_str = text_str.replace(/\s{2,}/g, ' ');
    text_str = inner_trim(text_str);
  }

  return text_str;
}

function replace_image(img) {
  var rand_val = Math.floor(Math.random()*100);
  if(rand_val > 50 && check_img_val(img)) {
    var clowning_val = Math.floor(Math.random()*10)+1;
    var repl_val = '';
    switch (clowning_val) {
      case 1:
        repl_val = 'http://media.salon.com/2014/10/Screen-Shot-2014-10-15-at-2.14.59-PM-1280x807.png';
        break;
      case 2:
        repl_val = 'http://i.imgur.com/TN7Gors.jpg';
        break;
      case 3:
        repl_val = 'http://i.ytimg.com/vi/hHjGtBnSv50/maxresdefault.jpg';
        break;
      case 4:
        repl_val = 'https://s-media-cache-ak0.pinimg.com/236x/66/f5/a2/66f5a27f365861f148ba72b6d549e4dc.jpg';
        break;
      case 5:
        repl_val = 'http://2.bp.blogspot.com/-cgzvcPmVj2Y/T2mUVpb9j4I/AAAAAAAACHY/r_BaKuYkzO0/s1600/horrible+clown.png';
        break;
      case 6:
        repl_val = 'http://i295.photobucket.com/albums/mm159/koko_lakorn/Conjuringre.jpg';
        break;
      case 7:
        repl_val = 'https://s-media-cache-ak0.pinimg.com/236x/84/f9/23/84f92343fd48ea68be361536810bbc1a.jpg';
        break;
      case 8:
        repl_val = 'http://cdn2-b.examiner.com/sites/default/files/styles/image_content_width/hash/58/3b/583bd4f5d422afdc037edf3fd01e22f6.jpg';
        break;
      case 9:
        repl_val = 'http://startelegram.typepad.com/cowtown_kingpin/images/2008/08/14/pennywise.jpg';
        break;
      case 10:
        repl_val = 'http://static3.aintitcool.com/assets2011/scaryordie2.jpg';
        break;
   }

    if(repl_val != '') {
      $(img).attr('src', repl_val);
    }
  }
}

function check_img_val(img) {
  var src = $(img).attr('src');

  switch (src) {
    case 'http://media.salon.com/2014/10/Screen-Shot-2014-10-15-at-2.14.59-PM-1280x807.png':
      return false;
    case 'http://i.imgur.com/TN7Gors.jpg':
      return false;
    case 'http://i.ytimg.com/vi/hHjGtBnSv50/maxresdefault.jpg':
      return false;
    case 'https://s-media-cache-ak0.pinimg.com/236x/66/f5/a2/66f5a27f365861f148ba72b6d549e4dc.jpg':
      return false;
    case 'http://2.bp.blogspot.com/-cgzvcPmVj2Y/T2mUVpb9j4I/AAAAAAAACHY/r_BaKuYkzO0/s1600/horrible+clown.png':
      return false;
    case 'http://i295.photobucket.com/albums/mm159/koko_lakorn/Conjuringre.jpg':
      return false;
    case 'https://s-media-cache-ak0.pinimg.com/236x/84/f9/23/84f92343fd48ea68be361536810bbc1a.jpg':
      return false;
    case 'http://cdn2-b.examiner.com/sites/default/files/styles/image_content_width/hash/58/3b/583bd4f5d422afdc037edf3fd01e22f6.jpg':
      return false;
    case 'http://startelegram.typepad.com/cowtown_kingpin/images/2008/08/14/pennywise.jpg':
      return false;
    case 'http://static3.aintitcool.com/assets2011/scaryordie2.jpg':
      return false;
  }

  return true;
}

function find_replace() {
  var word_val = Math.floor((Math.random()*all_words.length));

  var this_word = all_words[word_val];

  if(this_word != ' ' && this_word != 'clowning' && this_word.length > 2) {
    replace_word(this_word);
  }

  return_word();

  var clowning_time = (Math.floor(Math.random()*20)+10)*1000;


  var all_imgs = $('img');
  var img_val = Math.floor((Math.random()*all_imgs.length));

  var this_img = all_imgs[img_val];

  replace_image(this_img);

  setTimeout('find_replace()', clowning_time);
}
