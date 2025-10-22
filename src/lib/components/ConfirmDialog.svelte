<script>
  export let isOpen = false;
  export let title = '확인';
  export let message = '정말로 실행하시겠습니까?';
  export let confirmText = '확인';
  export let cancelText = '취소';
  export let onConfirm = () => {};
  export let onCancel = () => {};

  function handleConfirm() {
    onConfirm();
    isOpen = false;
  }

  function handleCancel() {
    onCancel();
    isOpen = false;
  }
</script>

<dialog class="modal" class:modal-open={isOpen}>
  <div class="modal-box">
    <h3 class="font-bold text-lg">{title}</h3>
    <p class="py-4 whitespace-pre-wrap">{message}</p>
    <div class="modal-action">
      <button class="btn" on:click={handleCancel}>{cancelText}</button>
      <button class="btn btn-primary" on:click={handleConfirm}>{confirmText}</button>
    </div>
  </div>
  <div class="modal-backdrop" on:click={handleCancel}></div>
</dialog>