function interface_alts() {
  //  * Creación de tipos indexables
  //  Puede usar interfaces que describan los tipos de matriz en los que se puede indexar.
  //  Los tipos indexables tienen una signatura de índice que describe el tipo que se puede usar para indexar en el objeto,
  //junto con los tipos de valores devueltos correspondientes al indexar.

  interface IceCreamArray {
    [index: number]: string;
  }

  let myIceCream: IceCreamArray;
  myIceCream = ['chocolate', 'vanilla', 'strawberry'];

  let myStr: string = myIceCream[0];
  console.log(myStr);

  // * Descripción de una API de JavaScript mediante una interfaz

  const fetchURL = 'https://jsonplaceholder.typicode.com/posts';

  interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    // return body as Post[];
    return body as Array<Post>;
  }

  async function showPost() {
    let posts = await fetchPosts(fetchURL);

    let post = posts[0];

    console.log('Post #' + post.id);
    console.log(
      'Author: ' +
        (post.userId === 1 ? 'Administrator' : post.userId.toString())
    );
    console.log('Title: ' + post.title);
    console.log('Body: ' + post.body);
  }

  showPost();
}

export default interface_alts;
