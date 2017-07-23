import baseurl from "./../BaseUrl";
const jsonRequest = url =>
  fetch(baseurl + url).then(response => {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      throw new Error("Error when fetching" + JSON.stringify(response));
    }

    return response.json();
  });

export default jsonRequest;
