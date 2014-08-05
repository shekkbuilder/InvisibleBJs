var all_words = new Array();

$(document).ready(function(){
  return_word();
  find_replace();
});

function replace_word(word) {
	$("*").contents().each(function() {
    if(this.nodeType == 3) {
      this.nodeValue = this.nodeValue.replace(word, "coughing");
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
    var coughing_val = Math.floor(Math.random()*10)+1;
    var repl_val = '';
    switch (coughing_val) {
      case 1:
        repl_val = 'http://learnherbalife.com/wp-content/uploads/2012/11/Coughing.jpg';
        break;
      case 2:
        repl_val = 'http://img2.timeinc.net/health/images/journeys/copd/chronic-cough-copd-400x400.jpg';
        break;
      case 3:
        repl_val = 'http://www.insidershealth.com/app/webroot/img/upload/wysiwyg/woman-coughing.jpg';
        break;
      case 4:
        repl_val = 'http://techcitement.com/admin/wp-content/uploads/2012/03/coughing.jpg';
        break;
      case 5:
        repl_val = 'http://wellnessconceptsclinic.com/yahoo_site_admin/assets/images/cough.2584649_std.jpg';
        break;
      case 6:
        repl_val = 'http://iywib.com/girls_coughing992.jpg';
        break;
      case 7:
        repl_val = 'http://img2.timeinc.net/health/images/gallery/living/woman-coughing-sick-400x400.jpg';
        break;
      case 8:
        repl_val = 'http://resources3.news.com.au/images/2012/10/23/1226501/532323-woman-coughing.jpg';
        break;
      case 9:
        repl_val = 'http://us.123rf.com/400wm/400/400/ihmb/ihmb0806/ihmb080600964/3191792-femme-toux.jpg';
        break;
      case 10:
        repl_val = 'http://www.normalbreathing.com/images-2010/woman-cannot-stop-coughing.jpg';
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
    case 'http://learnherbalife.com/wp-content/uploads/2012/11/Coughing.jpg':
      return false;
    case 'http://img2.timeinc.net/health/images/journeys/copd/chronic-cough-copd-400x400.jpg':
      return false;
    case 'http://www.insidershealth.com/app/webroot/img/upload/wysiwyg/woman-coughing.jpg':
      return false;
    case 'http://techcitement.com/admin/wp-content/uploads/2012/03/coughing.jpg':
      return false;
    case 'http://wellnessconceptsclinic.com/yahoo_site_admin/assets/images/cough.2584649_std.jpg':
      return false;
    case 'http://iywib.com/girls_coughing992.jpg':
      return false;
    case 'http://img2.timeinc.net/health/images/gallery/living/woman-coughing-sick-400x400.jpg':
      return false;
    case 'http://resources3.news.com.au/images/2012/10/23/1226501/532323-woman-coughing.jpg':
      return false;
    case 'http://us.123rf.com/400wm/400/400/ihmb/ihmb0806/ihmb080600964/3191792-femme-toux.jpg':
      return false;
    case 'http://www.normalbreathing.com/images-2010/woman-cannot-stop-coughing.jpg':
      return false;
  }

  return true;
}

function find_replace() {
  var word_val = Math.floor((Math.random()*all_words.length));

  var this_word = all_words[word_val];

  if(this_word != ' ' && this_word != 'coughing' && this_word.length > 2) {
    replace_word(this_word);
  }

  return_word();

  var coughing_time = (Math.floor(Math.random()*20)+10)*1000;


  var all_imgs = $('img');
  var img_val = Math.floor((Math.random()*all_imgs.length));

  var this_img = all_imgs[img_val];

  replace_image(this_img);

  setTimeout('find_replace()', coughing_time);
}