var words = ["Stress", "Bad Habits", "Weight Loss", "Smoking", "Sport Performance", "Addictions", "Anxiety", "Drinking", "Self-Esteem", "Grief", "Relaxation", "Sleep", "Phobias", "Trauma", "Gambling", "Behavior", "Depressed Feelings"];
changeText(0);
function changeText(i) {
  if (words.length > i) {
    setTimeout(function() {
      document.getElementById("issue").innerHTML = words[i];
      changeText(++i); //Works with ++i but not i++????
      //console.log("TEST");
      if (words.length === i)
      {
        i=-1;
        changeText(++i);
      }
    }, 2000); // 1 second
  }
}



