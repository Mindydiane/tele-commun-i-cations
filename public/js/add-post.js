async function newFormHandler(event) {
  event.preventDefault();

  console.log("I've been submeeeteeeed");

  const title = document.querySelector('input[name="post-title"]').value;
  const post_text = document.querySelector('textarea[name="post-text"]').value;

  console.log(post_text);

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title: title,
      post_text: post_text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
