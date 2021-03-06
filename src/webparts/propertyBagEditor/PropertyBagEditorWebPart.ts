import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";

import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";

import * as strings from "propertyBagEditorStrings";
import PropertyBagEditor from "./components/PropertyBagEditor";
import { IPropertyBagEditorProps } from "./components/IPropertyBagEditorProps";
import { IPropertyBagEditorWebPartProps } from "./IPropertyBagEditorWebPartProps";

export default class PropertyBagEditorWebPart extends BaseClientSideWebPart<IPropertyBagEditorWebPartProps> {

  public render(): void {
    const props: IPropertyBagEditorProps = {
      description: this.properties.description,
      propertiesToEdit: this.properties.propertiesToEdit,
      siteUrl:this.context.pageContext.site.absoluteUrl
         };
    const element: React.ReactElement<IPropertyBagEditorProps> = React.createElement(
      PropertyBagEditor,
      props
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }
 
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    debugger;
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel
                }),
                                PropertyPaneTextField("propertiesToEdit", {
                  label: strings.PropertiesToEditFieldLabel,
                  multiline:true
                }),

              ]

            }
          ]
        }
      ]
    };
  }
}
