import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  serverElements = [
    {
      type: "server",
      name: "Testserver",
      content: "Just a test!"
    }
  ];

  onServerAdded(severtData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: severtData.serverName,
      content: severtData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    console.log("blueprintData", blueprintData);
    this.serverElements.push({
      type: "blueprint",
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = "Changed!";
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
