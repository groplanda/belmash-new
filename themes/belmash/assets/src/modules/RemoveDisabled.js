export default function RemoveDisabled (labelSelector, btnSelector) {
  const label = document.querySelector(labelSelector),
  btn = document.querySelector(btnSelector);
  label.addEventListener('change', () => {
    if(label.checked) {
      btn.removeAttribute('disabled');
    } else {
      btn.setAttribute('disabled', true);
    }
  })
}
