/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "The Island of Play: Reflections on How to Design Multiuser VR to Promote Social Interaction",
    authors:
      "Lasse Juel Larsen, Troels Deibjerg Kristensen, Bo Kampmann Walter & Gunver Majgaard",
    conferences:
      "HCII 2022: Virtual, Augmented and Mixed Reality: Design and Development",
    researchYr: 2022,
    citebox: "popup1",
    image: "assets/images/research-page/inteferenceNetwork.png",
    citation: {
      vancouver:
        "Larsen, L.J., Kristensen, T.D., Walther, B.K., Majgaard, G. (2022). The Island of Play: Reflections on How to Design Multiuser VR to Promote Social Interaction. In: Chen, J.Y.C., Fragomeni, G. (eds) Virtual, Augmented and Mixed Reality: Design and Development. HCII 2022. Lecture Notes in Computer Science, vol 13317. Springer, Cham. https://doi.org/10.1007/978-3-031-05939-1_32",
    },
    abstract:
      "This article consists of reflections and considerations concerning a virtual reality design case: The Island of Play. It is a multiuser virtual reality prototype aimed at maintaining and encouraging social relationships between long term hospitalized children and their friends. The motivation behind this design is the dire situation long term hospitalized children often find themselves in. They experience isolation and marginalization due to constraints from hospitalization. A consequence hereof is a limited access to social interaction as well as a reduced opportunity to play with friends from either home or school. The Island of Play was essentially designed to set up a virtual meeting place to stimulate socialization through play. This article sits at the intersection between game design theory and actual design impressions, with a particular focus on how real-world design interweaves with theoretical considerations. The argument that follows is structured over five sections: 1) First, we contemplate the design of the player’s character. 2) Second, we scrutinize the relationship between game objects and playful interactions. 3) Then we move on to consider the design of social experiences, 4) followed by the fourth section where we inspect the value of the magic circle as a design metric. 5) Finally, in the fifth section, we reflect on the importance of weighing the player’s sensation of purpose and skill against interacting with the application. Overall, this design case pivots around design issues and considerations involved in the development of play and game scenarios in a multiuser VR-application aimed at bolstering the social fabric between long term hospitalized children and their friends.",
    absbox: "absPopup1",
  }
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
