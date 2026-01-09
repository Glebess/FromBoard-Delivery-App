import Advantages from "./components/Advantages/Advantages";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import styles from "./App.module.css";
import QualityGuarantees from "./components/QualityGuarantees/QualityGuarantees.JSX";
import CommentSector from "./components/CommentSector/CommentSector ";
import Feedback from "./Feedback/Feedback";
import Basement from "./components/Basement/Basement";
function App() {
  return (
    <>
      <Header />
      <div className={styles.app_container}>
        <Welcome />
        <Advantages />
        <QualityGuarantees />
        <CommentSector />
        <Feedback />
        <Basement />
      </div>
    </>
  );
}

export default App;
