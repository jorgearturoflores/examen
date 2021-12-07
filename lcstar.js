var frienlist =[];
 function addFriendtoSytem(pname, pform, pcolour){
      var newFriend = {
           name: pname,
           form: pform,
           colour: pcolour,
      };
      console.log(newFriend);
      frienlist.push(newFriend);
      localStoragefrienlist(frienlist);
    }
function getfrienlist(){
  var storelist = localStorage.getItem('localfrienlist');
  if(storelist == null){
        frienlist= [];
  }
  else{
      frienlist = JSON.parse(storedList);
  }
  return frienlist;
}
function localStoragefrienlist(plist){
    localStorage.setItem('localfrienlist', JSON.stringify(plist));
}

