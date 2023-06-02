// Import Components
import PrimaryButton from "../components/PrimaryButton";

// Import Images
import maghellan from "../assets/images/Alexander-Reid.png";
import SpirtImage from "../assets/images/carrusel-macallan-3-horizontal.jpg";
import bottles from "../assets/images/clipping_3YDyCi_668c.webp";
import ForestImage from "../assets/images/forest.png";
import barrels from "../assets/images/barrel.png";
import rightImg from "../assets/images/TMS hero cropped.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="aboutHead">
        <span className="italicHead">Inside The Macallan</span>
        <h2 className="contentTitle">NESTLED ABOVE THE RIVER SPEY</h2>
        <p className="contentInfo">
          An obsession with quality has been the hallmark of The Macallan since
          its founding by Alexander Reid on a plateau above the river Spey in
          north-east Scotland. The distillery is surrounded by a 485 acre estate
          with Easter Elchies House at its heart.
        </p>
      </div>
      <div className="deepRoots">
        <div className="container">
          <div className="deepCover">
            <div className="coverInfo">
              <span className="italicHead">Deep Roots</span>
              <h3 className="contentTitle">FOUNDED IN 1824</h3>
              <p className="deepInfo">
                The Macallan was one of the first distillers in Scotland to be
                legally licensed. Since then we have built a reputation as one
                of the world’s leading single malt whiskies. The creation of The
                Macallan draws on the vital contributing influences of Spain,
                North America and Scotland - and of their respective natural raw
                materials, combined with traditional methods and craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="richLegacy">
        <div className="container">
          <div className="richImg">
            <img src={maghellan} alt="maghellan" />
          </div>
          <div className="richInfo">
            <span className="italicTitle">Rich Legacy</span>
            <h2 className="infoTitle">“MAGHELLAN”</h2>
            <div className="infoText">
              The Macallan distillery was founded by Alexander Reid, a barley
              farmer and school teacher. The original name of the area was
              “Maghellan”, taken from the Gaelic word “magh”, meaning fertile
              ground and “Ellan”, from the Monk St.Fillan - who held a close
              association with the church that stood in the grounds of The
              Macallan Estate until 1400. Farmers had been making whisky on
              their Speyside farms in the area for centuries, using their
              surplus barley during the quieter winter months.
            </div>
          </div>
        </div>
      </div>
      <div className="foundation">
        <div className="container">
          <div className="sixPillar">
            <span className="italicTitle">Strong Foundations</span>
            <h2 className="pillarTitle">THE SIX PILLARS</h2>
            <p className="pillarText">
              The reputation of The Macallan is built on a product of
              outstanding quality and distinctive character, founded upon a set
              of guiding principles. From place to process, people and passion,
              the Six Pillars are the backdrop to The Macallan's unique spirit.
            </p>
            <PrimaryButton />
          </div>
        </div>
      </div>
      <div className="character">
        <div className="container">
          <div className="characterInfo">
            <span className="italicTitle">Defining Character</span>
            <h2 className="infoTitle">THE MASTERY OF WOOD AND SPIRIT</h2>
            <div className="infoText">
              Our reputation for the extraordinary is characterised by the
              exceptional oak casks for which The Macallan is renowned. Sourced,
              crafted, toasted and seasoned under the watchful eye of The
              Macallan Master of Wood, the hand-picked casks are delivered to
              the demanding specifications of The Macallan Whisky Mastery Team.
              For every expression of The Macallan, the quality of the whisky is
              largely dependent on the quality of the oak casks it is matured
              in, as well as the quality of our 'new make' spirit distilled from
              water, yeast and barley. With up to 80% of The Macallan’s final
              character and flavour determined by cask quality, the oak cask is
              the most prominent factor in ensuring and delivering the quality
              and style of our single malt.
            </div>
          </div>
          <div className="characterImg">
            <img src={SpirtImage} alt="SpirtImage" />
          </div>
        </div>
      </div>
      <div className="quality">
        <div className="container">
          <div className="qualityImg">
            <img src={bottles} alt="bottles" />
          </div>
          <div className="qualityInfo">
            <span className="italicTitle">Unmatched Quality</span>
            <h2 className="infoTitle">CHARACTERISED BY COLOUR</h2>
            <div className="infoText">
              All of our whiskies take 100% of their colour from the wood in
              which they are matured. As wood is a natural product, each tree is
              different and in turn, imparts different flavours and colours to
              the whisky during maturation. The skill of the whisky makers
              ensures colour is as consistent as possible from bottling to
              bottling, through the management and selection of the casks which
              provide the spectrum of natural colour essential to The Macallan
              single malt.
            </div>
          </div>
        </div>
      </div>
      <div className="journey">
        <div className="container">
          <div className="journeyInfo">
            <span className="italicTitle">Acorn to Glass</span>
            <h2 className="infoTitle">
              A JOURNEY OF TIME, DISTANCE AND KNOW-HOW
            </h2>
            <div className="infoText">
              The Macallan works closely with fully integrated ‘tree to finished
              seasoned cask’ companies in Spain; to identify the oak trees in
              the forests of northern Spain, fell the trees, saw and air dry the
              oak staves before shipping them to the south for further
              air-drying to reduce the moisture even more. The casks are then
              seasoned for 18 months before making the journey to Scotland where
              they are filled with The Macallan ‘new make’ spirit.
            </div>
          </div>
          <div className="journeyImg">
            <img src={ForestImage} alt="ForestImage" />
          </div>
        </div>
      </div>
      <div className="social">
        <div className="container">
          <div className="spySide">
            <h2 className="pillarTitle">
              SOCIAL AND ENVIRONMENTAL SUSTAINABILITY
            </h2>
            <p className="pillarText">
              Our commitment to doing the right thing actively informs every
              decision we make, not only in relation to what is right for the
              legacy of our precious single malt whisky, but also what is right
              in relation to our local and global social and environmental
              legacy. Learn about our social and environmental commitments.
            </p>
            <PrimaryButton />
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="container">
          <div className="join">
            <div className="rightImg">
              <img src={rightImg} alt="rightImg" />
            </div>
            <div className="imgInfo">
              <span className="joinTitle">Join</span>
              <h2 className="rightTitle">THE MACALLAN SOCIETY</h2>
              <p className="rightText">
                Join us for a rich experience with The Macallan. You will be the
                first to hear exciting news, learn about experiences, new
                product releases and access special, behind the scenes content.
              </p>
              <PrimaryButton />
            </div>
          </div>
          <div className="explore">
            <div className="leftImg">
              <img src={barrels} alt="barrels" />
            </div>
            <div className="imgInfo">
              <span className="italicTitle">The Macallan Estate</span>
              <h2 className="leftTitle">VISIT THE DISTILLERY</h2>
              <PrimaryButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
