
function Search() {
  window.location.assign("login.html");
}

  function floorDisplayCheck(floorNumber) {
    if (floorNumber<=4 && floorNumber>=0) {
      if(floorNumber==0) {
        displayFloor0()
      }if(floorNumber==1){
        displayFloor1()
      }if(floorNumber==2){
        displayFloor2()
      }if(floorNumber==3){
        displayFloor3()
      }if(floorNumber==4){
        displayFloor4()
      }
    } else {
      console.warn("هذا الطابق غير موجود، يمكنك البحث عن الطابق بالارقام 1 او 2 او 3 او4 او 0 فقط");
    }
  }
  function displayFloor0() {
    
  }
  function displayFloor1() {
    
  }
  function displayFloor2() {
    
  }
  function displayFloor3() {
    
  }
  function displayFloor4() {
    
  }