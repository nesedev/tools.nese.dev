<script lang="ts">
  import { onMount } from 'svelte';

  let logoInput: HTMLInputElement;
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null;
  let notificationCount: number = 1;
  let currentImage: HTMLImageElement;
  let resultImg: HTMLImageElement;

  onMount(() => {
    currentImage = new Image();

    if (!canvas) return;
    ctx = canvas.getContext('2d');
    if (!ctx) return;

    drawImage();
    resultImg.src = canvas.toDataURL();

    document.fonts.load('700 125px Roboto Mono').then(() => {
      addNotification();
      const fontLoaderInterval = setInterval(() => {
        if (document.fonts.check('700 125px Roboto Mono')) {
          clearInterval(fontLoaderInterval);
        }
        addNotification();
      }, 100);
      setTimeout(() => clearInterval(fontLoaderInterval), 1000);
    });
  });

  const addNotification = () => {
    if (!ctx || !canvas) return;

    drawImage();

    ctx.save();
    ctx.beginPath();
    ctx.arc(376, 376, 128, 0, 2 * Math.PI);
    ctx.clip();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    ctx.fillStyle = '#F04747';
    ctx.beginPath();
    ctx.arc(376, 376, 86, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = 'white';
    ctx.font = '700 125px "Roboto Mono"';
    ctx.fillText(notificationCount.toString(), 338, 420);

    resultImg.src = canvas.toDataURL();
  };

  let currentFileName: string;

  const drawImage = () => {
    if (!ctx || !canvas) return;

    if (currentImage.src != '') {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);
    } else {
      ctx.fillStyle = '#1f1f1f';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  };

  const handleFileChange = (e: any) => {
    const currentFile = e.target.files[0];
    currentFileName = currentFile.name;

    const reader = new FileReader();
    reader.readAsDataURL(currentFile);
    reader.onloadend = (e: any) => {
      currentImage.src = e.target.result;
      currentImage.onload = () => {
        addNotification();
      };
    };
  };

  const notificationCountChange = () => {
    addNotification();
  };

  const downloadButtonHandler = () => {
    const link = document.createElement('a');
    const fileName = currentFileName
      ? (currentFileName.substring(0, currentFileName.lastIndexOf('.')) || currentFileName) +
        '-april-fools.png'
      : 'discord-april-fools.png';
    link.download = fileName;
    link.href = canvas.toDataURL();
    link.click();
  };
</script>

<svelte:head>
  <title>NeseDev | Discord April Fools</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="wrapper">
  <label class="file-button button">
    {currentFileName || 'Browse Logo...'}
    <input
      bind:this={logoInput}
      on:change={handleFileChange}
      type="file"
      id="logo-input"
      accept="image/*"
    />
  </label>

  <input
    class="input button"
    type="number"
    bind:value={notificationCount}
    on:change={notificationCountChange}
    min="0"
    max="9"
  />

  <div class="canvas-wrapper">
    <img class="logo-canvas" bind:this={resultImg} src="" alt="" />
    <canvas class="logo-canvas" bind:this={canvas} width={512} height={512} hidden />
  </div>

  <button class="input button download-button" on:click={downloadButtonHandler}>Download</button>

  <span class="font-loader">&nbsp;</span>
</div>

<style lang="scss" scoped>
  .font-loader {
    font-family: 'Roboto Mono';
    position: absolute;
    pointer-events: none;
    user-select: none;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    min-width: 50%;
  }

  .logo-canvas {
    border-radius: 50%;
    transition: 0.25s ease-in-out;
    width: 50%;

    &:hover {
      border-radius: 35%;
    }
  }

  .canvas-wrapper {
    display: flex;
    justify-content: center;
    margin: 0.5rem;
  }

  .button {
    background: var(--gray-4);
    padding: 0.5em;
    border-radius: 0.5em;
    margin: 0.5rem 1rem;
  }

  .file-button {
    cursor: pointer;
    input {
      display: none;
    }
  }

  .download-button {
    cursor: pointer;
  }

  .input {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border: none;
    outline: none;
  }
</style>
