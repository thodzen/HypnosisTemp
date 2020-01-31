var words = ["test1", "test2", "test3", "test4"];
changeText(0);
function changeText(i) {
  if (words.length > i) {
    setTimeout(function() {
      document.getElementById("issue").innerHTML = words[i];
      changeText(++i); //Words with ++i but not i++????
      //console.log("TEST");
    }, 1000); // 1 second
  }
  }
