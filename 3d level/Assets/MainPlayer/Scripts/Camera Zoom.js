var zoom : int = 20;
var normal : int = 60;
var smooth : float = 5;
private var isZoomed = false;
function Update () {
     if(Input.GetButtonDown("Fire2"))
     {
          isZoomed = !isZoomed; 
     }

     if(isZoomed == true){
          GetComponent.<Camera>().fieldOfView = Mathf.Lerp(GetComponent.<Camera>().fieldOfView,zoom,Time.deltaTime*smooth);
     }
     else{
        GetComponent.<Camera>().fieldOfView = Mathf.Lerp(GetComponent.<Camera>().fieldOfView,normal,Time.deltaTime*smooth);
     }
}