import { Component, OnInit } from '@angular/core';
import { Network } from "vis-network/peer/esm/vis-network";
import { DataSet } from "vis-data/peer/esm/vis-data"

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  network?: Network;
  nodes: any;
  edges: any;

  options = {
    nodes: {
      color: {
        border: '#e1e1e1',
        background: '#4F709C',
        highlight: {
          border: '#f2f2f2',
          background: '#50719c'
        },
        hover: {
          border: '#D8C4B6',
          background: '#4F709C'
        }
      },
      font: {
        color: '#F5EFE7'
      },
      shape: 'box',
    },
  };
  
  ngOnInit(): void {
    this.nodes = new DataSet([
      { id: 1, label: "Skills" },

      { id: 2, label: "Software Engineering" },
      { id: 3, label: "Netwerken" },
      
      
      { id: 10, label: "Communicatie" },

      { id: 11, label: "Engels" },
      { id: 12, label: "Frans" },
      { id: 13, label: "Professionele Communicatie" },
      

      { id: 20, label: "Programmeren" },

      { id: 21, label: "Java" },
      { id: 22, label: "Flutter" },
      { id: 23, label: "Azure" },
      { id: 24, label: "C" },
      { id: 25, label: "Python" },


      { id: 30, label: "Databanken" },

      { id: 31, label: "Oracle" },
      { id: 32, label: "Sqlite" },
      { id: 34, label: "MsSql" },
      { id: 35, label: "MongoDB" },
      { id: 36, label: "PostgreSQL" },
      { id: 37, label: "CosmosDB" },
      { id: 38, label: "MySql" },


      { id: 40, label: "Management" },

      { id: 41, label: "Data Analyse" },
      { id: 42, label: "Boekhoudkundig Inzicht" },
      { id: 43, label: "Accounting" },
      { id: 44, label: "ERP Development" },
      { id: 45, label: "Business Processes" },
      { id: 46, label: "Project & Performance Management" },


      { id: 80, label: "Web" },

      { id: 81, label: "Vanilla" },
      { id: 82, label: "Angular" },
      { id: 83, label: "React" },
      { id: 84, label: "Vue" },
      { id: 85, label: "Nuxt" },
      { id: 86, label: "npm" },


      { id: 90, label: ".NET" },

      { id: 91, label: "Razor Pages" },
      { id: 92, label: "ASP.NET MVC" },
      { id: 93, label: "Framework ^4.0" },
      { id: 94, label: "WPF" },
      { id: 95, label: "Xamarin" },
      { id: 96, label: "NuGet" },
    ]);
    
    // create an array with edges
    this.edges = new DataSet([
      { id: 1, from: 1, to: 2 },
      { id: 2, from: 1, to: 3 },
      { id: 3, from: 1, to: 10 },
      { id: 4, from: 1, to: 20 },
      { id: 5, from: 1, to: 30 },
      { id: 6, from: 1, to: 40 },

      { id: 9, from: 10, to: 11 },
      { id: 10, from: 10, to: 12 },
      { id: 11, from: 10, to: 13 },

      { id: 12, from: 20, to: 21 },
      { id: 13, from: 20, to: 22 },
      { id: 14, from: 20, to: 23 },
      { id: 15, from: 20, to: 24 },
      { id: 16, from: 20, to: 25 },
      { id: 17, from: 20, to: 80 },
      { id: 18, from: 20, to: 90 },

      { id: 19, from: 30, to: 31 },
      { id: 20, from: 30, to: 32 },
      { id: 21, from: 30, to: 33 },
      { id: 22, from: 30, to: 34 },
      { id: 23, from: 30, to: 35 },
      { id: 24, from: 30, to: 36 },
      { id: 25, from: 30, to: 37 },
      { id: 26, from: 30, to: 38 },

      { id: 27, from: 40, to: 41 },
      { id: 28, from: 40, to: 42 },
      { id: 29, from: 40, to: 43 },
      { id: 30, from: 40, to: 44 },
      { id: 31, from: 40, to: 45 },
      { id: 32, from: 40, to: 46 },

      { id: 33, from: 80, to: 81 },
      { id: 34, from: 80, to: 82 },
      { id: 35, from: 80, to: 83 },
      { id: 36, from: 80, to: 84 },
      { id: 37, from: 80, to: 85 },
      { id: 38, from: 80, to: 86 },

      { id: 40, from: 90, to: 91 },
      { id: 41, from: 90, to: 92 },
      { id: 42, from: 90, to: 93 },
      { id: 43, from: 90, to: 94 },
      { id: 44, from: 90, to: 95 },
      { id: 45, from: 90, to: 96 },
    ]);

    const data = {
      nodes: this.nodes,
      edges: this.edges
    };

    const container = document.getElementById('network');
    this.network = new Network(container!, data, this.options);
    this.network.on('click', (props) => {
      var ids = props.nodes;
      var clickedNodes = this.nodes.get(ids);
      console.log(clickedNodes);
    } )
  }
}
