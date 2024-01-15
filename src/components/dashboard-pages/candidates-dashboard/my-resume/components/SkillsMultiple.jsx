import Select from "react-select";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { updatecarieerinfo } from "../../../../../services/api/candidate_api";
import { setInfo } from "../../../../../features/candidate/candidateSlice";
import { setLoading } from "../../../../../features/loading/loadingSlice";
import {toast} from 'react-toastify'
import { handleApiError } from "../../../../../utils/apiErrorHandling";
const SkillsMultiple = () => {
  const dispatch = useDispatch();
  const {info} = useSelector(state=>state.candidate);
  console.log(info)
  const [def,setdef] = useState([]);
  useEffect(()=>{
    const s = info?.skills?.map(val=>({value:val,label:val}));
    setdef(s);
  },[info])
  console.log(def)
  const catOptions = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
    { value: "C#", label: "C#" },
    { value: "C++", label: "C++" },
    { value: "Ruby", label: "Ruby" },
    { value: "Swift", label: "Swift" },
    { value: "Kotlin", label: "Kotlin" },
    { value: "Go (Golang)", label: "Go (Golang)" },
    { value: "TypeScript", label: "TypeScript" },
    { value: "PHP", label: "PHP" },
    { value: "Rust", label: "Rust" },
    { value: "Objective-C", label: "Objective-C" },
    { value: "Shell Scripting (Bash)", label: "Shell Scripting (Bash)" },
    { value: "Scala", label: "Scala" },
    { value: "Perl", label: "Perl" },
    { value: "Lua", label: "Lua" },
    { value: "Groovy", label: "Groovy" },
    { value: "Dart", label: "Dart" },
    { value: "R Programming Language", label: "R Programming Language" },
    { value: "HTML/CSS", label: "HTML/CSS" },
    { value: "React.js", label: "React.js" },
    { value: "Angular", label: "Angular" },
    { value: "Vue.js", label: "Vue.js" },
    { value: "Node.js", label: "Node.js" },
    { value: "Express.js", label: "Express.js" },
    { value: "Django", label: "Django" },
    { value: "Flask", label: "Flask" },
    { value: "Ruby on Rails", label: "Ruby on Rails" },
    { value: "ASP.NET", label: "ASP.NET" },
    { value: "React Native", label: "React Native" },
    { value: "Flutter", label: "Flutter" },
    { value: "iOS (Swift, Objective-C)", label: "iOS (Swift, Objective-C)" },
    { value: "Android (Kotlin, Java)", label: "Android (Kotlin, Java)" },
    { value: "MySQL", label: "MySQL" },
    { value: "PostgreSQL", label: "PostgreSQL" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Microsoft SQL Server", label: "Microsoft SQL Server" },
    { value: "Oracle Database", label: "Oracle Database" },
    { value: "SQLite", label: "SQLite" },
    { value: "Redis", label: "Redis" },
    { value: "Cassandra", label: "Cassandra" },
    { value: "CouchDB", label: "CouchDB" },
    { value: "Amazon Web Services (AWS)", label: "Amazon Web Services (AWS)" },
    { value: "Microsoft Azure", label: "Microsoft Azure" },
    { value: "Google Cloud Platform (GCP)", label: "Google Cloud Platform (GCP)" },
    { value: "IBM Cloud", label: "IBM Cloud" },
    { value: "Oracle Cloud", label: "Oracle Cloud" },
    { value: "Docker", label: "Docker" },
    { value: "Kubernetes", label: "Kubernetes" },
    { value: "OpenStack", label: "OpenStack" },
    { value: "Cisco Networking Technologies", label: "Cisco Networking Technologies" },
    { value: "Juniper Networks", label: "Juniper Networks" },
    { value: "Wireshark", label: "Wireshark" },
    { value: "Network Security (Firewalls, IDS/IPS)", label: "Network Security (Firewalls, IDS/IPS)" },
    { value: "LAN/WAN Management", label: "LAN/WAN Management" },
    { value: "Firewall Systems", label: "Firewall Systems" },
    { value: "Intrusion Detection Systems (IDS)", label: "Intrusion Detection Systems (IDS)" },
    { value: "Intrusion Prevention Systems (IPS)", label: "Intrusion Prevention Systems (IPS)" },
    { value: "Antivirus Software", label: "Antivirus Software" },
    { value: "Security Information and Event Management (SIEM)", label: "Security Information and Event Management (SIEM)" },
    { value: "Penetration Testing Tools (e.g., Metasploit)", label: "Penetration Testing Tools (e.g., Metasploit)" },
    { value: "Encryption Technologies (SSL/TLS, PGP)", label: "Encryption Technologies (SSL/TLS, PGP)" },
    { value: "VPN Technologies", label: "VPN Technologies" },
    { value: "Python Libraries (NumPy, Pandas, Matplotlib)", label: "Python Libraries (NumPy, Pandas, Matplotlib)" },
    { value: "R", label: "R" },
    { value: "Jupyter Notebooks", label: "Jupyter Notebooks" },
    { value: "SQL for Data Analysis", label: "SQL for Data Analysis" },
    { value: "Apache Hadoop", label: "Apache Hadoop" },
    { value: "Apache Spark", label: "Apache Spark" },
    { value: "Tableau", label: "Tableau" },
    { value: "Power BI", label: "Power BI" },
    { value: "TensorFlow", label: "TensorFlow" },
    { value: "PyTorch", label: "PyTorch" },
    { value: "Scikit-learn", label: "Scikit-learn" },
    { value: "Keras", label: "Keras" },
    { value: "OpenCV", label: "OpenCV" },
    { value: "Natural Language Processing (NLP) Libraries", label: "Natural Language Processing (NLP) Libraries" },
    { value: "IBM Watson", label: "IBM Watson" },
    { value: "Google Cloud AI", label: "Google Cloud AI" },
    { value: "Git", label: "Git" },
    { value: "Jenkins", label: "Jenkins" },
    { value: "Docker", label: "Docker" },
    { value: "Kubernetes", label: "Kubernetes" },
    { value: "Ansible", label: "Ansible" },
    { value: "Puppet", label: "Puppet" },
    { value: "Chef", label: "Chef" },
    { value: "Continuous Integration/Continuous Deployment (CI/CD) Tools", label: "Continuous Integration/Continuous Deployment (CI/CD) Tools" },
    { value: "Adobe Creative Cloud (Photoshop, Illustrator, XD)", label: "Adobe Creative Cloud (Photoshop, Illustrator, XD)" },
    { value: "Sketch", label: "Sketch" },
    { value: "Figma", label: "Figma" },
    { value: "InVision", label: "InVision" },
    { value: "Zeplin", label: "Zeplin" },
    { value: "Prototyping Tools", label: "Prototyping Tools" },
    { value: "Selenium", label: "Selenium" },
    { value: "JUnit", label: "JUnit" },
    { value: "TestNG", label: "TestNG" },
    { value: "Cucumber", label: "Cucumber" },
    { value: "Jira", label: "Jira" },
    { value: "Appium", label: "Appium" },
    { value: "Load Testing Tools (e.g., Apache JMeter)", label: "Load Testing Tools (e.g., Apache JMeter)" },
    { value: "Postman", label: "Postman" },
    { value: "Jira", label: "Jira" },
    { value: "Trello", label: "Trello" },
    { value: "Asana", label: "Asana" },
    { value: "Microsoft Project", label: "Microsoft Project" },
    { value: "Agile Methodologies (Scrum, Kanban)", label: "Agile Methodologies (Scrum, Kanban)" },
    { value: "Confluence", label: "Confluence" },
    { value: "GitLab", label: "GitLab" },
    { value: "Business Analysis Tools", label: "Business Analysis Tools" },
    { value: "Project Planning and Management Tools", label: "Project Planning and Management Tools" },
    { value: "Client Communication Tools", label: "Client Communication Tools" },
    { value: "Requirements Gathering Tools", label: "Requirements Gathering Tools" },
    { value: "Help Desk Software", label: "Help Desk Software" },
    { value: "Remote Desktop Tools", label: "Remote Desktop Tools" },
    { value: "Troubleshooting Tools", label: "Troubleshooting Tools" },
    { value: "Customer Relationship Management (CRM) Systems", label: "Customer Relationship Management (CRM) Systems" },
    { value: "Knowledge Base Tools", label: "Knowledge Base Tools" },
    { value: "Integrated Development Environments (IDEs)", label: "Integrated Development Environments (IDEs)" },
    { value: "Code Editors (VSCode, Sublime Text)", label: "Code Editors (VSCode, Sublime Text)" },
    { value: "Version Control Systems (Git)", label: "Version Control Systems (Git)" },
    { value: "Code Review Tools", label: "Code Review Tools" },
    { value: "Code Collaboration Platforms (GitHub, GitLab)", label: "Code Collaboration Platforms (GitHub, GitLab)" },
    { value: "Unit Testing Frameworks", label: "Unit Testing Frameworks" },
  ];
  const handleChange = async (selected) =>{
    const sended = selected.map(s=>s.value)
    try {
      const {data} = await updatecarieerinfo({skills:sended});
      dispatch(setInfo(data.data))
    } catch (error) {
      handleApiError(error)
    }
    // console.log(selected.map(s=>s.value))
  }
  return (
    <Select
      value={def}
      isMulti
      isSearchable
      name="colors"
      options={catOptions}
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={handleChange}
    />
  );
};

export default SkillsMultiple;
