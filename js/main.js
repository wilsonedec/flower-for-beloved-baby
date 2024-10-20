
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Hello, my beloved princess. I love you so much as well as thank you for constantly being at my side. Thank you for being there for me throughout the most difficult time of my life. You carry everything, and I know you are tired. Always remember that Wilson is proud of where you are now. Remember that I am always here behind your back. I am your biggest admirer baby hehe. Congratulations again, baby, for maintaining your with high honors!, Let us celebrate it together hehe, just wait, but first let us get through this difficult month that we may relax. I Love You babyy. I am grateful to have you because you have never left me and accept me no matter how I act, which makes me very thankful. Your eyes, nose, lips, and cheeks are all stunning, whether or not you have any makeup on. I will always adore you, support you in everything you do, and show you just how much you are worth You bring so much joy and light into my life, and I cherish every moment we share. Your laughter brightens my day, and your kindness inspires me to be better. I cannot imagine my life without you, and I lookforward to all adventures that lie ahead for us. Thank youu my babyy.').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 100); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};