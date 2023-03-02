function SelectedBeast({ theBeast, handleModal }) {
  function closeModal() {
    handleModal({});
  }

  return (
    <div className="selected-beast">
      <span onClick={closeModal}>X</span>
      <img src={theBeast.image_url} alt={theBeast.title} />
    </div>
  );
}
export default SelectedBeast;
