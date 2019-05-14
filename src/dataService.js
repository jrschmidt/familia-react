export default function getData () {
  fetch('/persons')
  .then(
    (data) => {}
  )
  .catch(
    (error) => {
      console.log(error);
      return null;
    }
  );
}
