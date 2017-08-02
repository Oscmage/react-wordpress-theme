import baseurl from "./../BaseUrl";
export const getRequest = url =>
  fetch(baseurl + url).then(response => {
    return handleStatus(response);
  });

const handleStatus = response => {
  if (response.status !== 200) {
    console.log(
      "Looks like there was a problem. Status Code: " + response.status
    );
    throw new Error("Error when fetching" + JSON.stringify(response));
  }

  return response.json();
};

export const postRequest = (url, body) =>
  fetch(baseurl + url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: body
  }).then(response => {
    return handleStatus(response);
  });
