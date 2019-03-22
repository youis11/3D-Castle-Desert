var bulletPrefab : Transform;
var bulletSpeed : float = 4000;

function Update() {
	if (Input.GetButtonDown("Fire1")) {
	var bulletCreate = Instantiate(bulletPrefab, transform.Find("BulletExit").transform.position, Quaternion.identity);
	bulletCreate.gameObject.tag = "myProjectile";
	bulletCreate.GetComponent.<Rigidbody>().AddForce(transform.forward * bulletSpeed);
	}
}