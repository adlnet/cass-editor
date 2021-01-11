(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{347:function(e,t,r){"use strict";r.r(t);var a=r(40),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"competency-property-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#competency-property-configuration"}},[e._v("#")]),e._v(" Competency Property Configuration")]),e._v(" "),r("p",[e._v("Competency properties are the values that can be added, edited, and deleted for competency objects. Default competency properties are "),r("strong",[e._v("id, name, description,")]),e._v(" and "),r("strong",[e._v("type")]),e._v(". Properties added here will be displayed when editing competency level objects in the framework editor.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/cass-editor/docs/competency-configuration.png",alt:"Competency Configuration"}})]),e._v(" "),r("h2",{attrs:{id:"property-fields"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#property-fields"}},[e._v("#")]),e._v(" Property Fields")]),e._v(" "),r("p",[e._v("Certain property fields can be modified directly from the property list:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("display label")]),e._v(" - label to be displayed in form inputs for that property")]),e._v(" "),r("li",[r("strong",[e._v("description")]),e._v(" - description of this property")]),e._v(" "),r("li",[r("strong",[e._v("display category")]),e._v(" - category (if any) under which the property is displayed in form inputs")]),e._v(" "),r("li",[r("strong",[e._v("required")]),e._v(" - property required toggle")]),e._v(" "),r("li",[r("strong",[e._v("display priority")]),e._v(" - priority in which the property is displayed in form inputs (primary, secondary, or tertiary)")])]),e._v(" "),r("p",[e._v("At the competency level the following static rules apply:")]),e._v(" "),r("ul",[r("li",[e._v("The "),r("strong",[e._v("id")]),e._v(" property is "),r("em",[e._v("required")])]),e._v(" "),r("li",[e._v("The "),r("strong",[e._v("name")]),e._v(" property is "),r("em",[e._v("required")]),e._v(" and has a display priority of "),r("em",[e._v("primary")])])]),e._v(" "),r("h2",{attrs:{id:"custom-competency-properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#custom-competency-properties"}},[e._v("#")]),e._v(" Custom Competency Properties")]),e._v(" "),r("p",[e._v("Custom properties can be added to a competency by clicking the "),r("em",[e._v("add custom competency property")]),e._v(" button.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/cass-editor/docs/add-custom-property.png",alt:"Add Custom Competency Property"}})]),e._v(" "),r("p",[e._v("Once clicked, the "),r("em",[e._v("New Competency Property")]),e._v(" dialogue window is displayed.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/cass-editor/docs/new-competency-property.png",alt:"New Competency Property"}})]),e._v(" "),r("h3",{attrs:{id:"custom-competency-property-fields"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#custom-competency-property-fields"}},[e._v("#")]),e._v(" Custom Competency Property Fields")]),e._v(" "),r("p",[e._v("Several fields must be completed in order to add the new property. Some field options (such as "),r("em",[e._v("range/type: Text")]),e._v(") allow further customization of the property.")]),e._v(" "),r("h3",{attrs:{id:"context"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("Only editable at the time of property creation.")])]),e._v(" "),r("p",[e._v("Custom properties in CaSS are stored as namespaced linked JSON-LD records. Because of this, all new properties must have a context. By default, all custom properties have the "),r("strong",[e._v("CaSS v4.0")]),e._v(" ("),r("em",[e._v("https://schema.cassproject.org/0.4/")]),e._v(") context. However, it is also possible to modify this field to the following values:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("CTDL-ASN")]),e._v(" - "),r("a",{attrs:{href:"https://purl.org/ctdlasn/terms/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://purl.org/ctdlasn/terms/"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("strong",[e._v("RDF Semantic Web Standards 1999")]),e._v(" - "),r("a",{attrs:{href:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.w3.org/1999/02/22-rdf-syntax-ns#"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("strong",[e._v("RDF Semantic Web Standards 2000")]),e._v(" - "),r("a",{attrs:{href:"http://www.w3.org/2000/01/rdf-schema#",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.w3.org/2000/01/rdf-schema#"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("strong",[e._v("Key Based Authorization and Control")]),e._v(" - "),r("a",{attrs:{href:"https://schema.cassproject.org/kbac/0.4/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://schema.cassproject.org/kbac/0.4/"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("strong",[e._v("Eduworks v3.0")]),e._v(" - "),r("a",{attrs:{href:"http://schema.eduworks.com/general/0.3/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://schema.eduworks.com/general/0.3/"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("strong",[e._v("Schema.org")]),e._v(" - "),r("a",{attrs:{href:"http://schema.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://schema.org/"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("strong",[e._v("Achievements Standard Network")]),e._v(" - "),r("a",{attrs:{href:"http://purl.org/ASN/schema/core/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://purl.org/ASN/schema/core/"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("strong",[e._v("DCMI Elements v1.1")]),e._v(" - "),r("a",{attrs:{href:"http://purl.org/dc/elements/1.1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://purl.org/dc/elements/1.1/"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("strong",[e._v("DCMI Terms")]),e._v(" - "),r("a",{attrs:{href:"http://purl.org/dc/terms/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://purl.org/dc/terms/"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("strong",[e._v("Gem v2.0")]),e._v(" - "),r("a",{attrs:{href:"http://purl.org/gem/qualifiers/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://purl.org/gem/qualifiers/"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("strong",[e._v("Relators Scheme")]),e._v(" - "),r("a",{attrs:{href:"http://www.loc.gov/loc.terms/relators/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.loc.gov/loc.terms/relators/"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("strong",[e._v("Simple Knowledge Organization System")]),e._v(" - "),r("a",{attrs:{href:"http://www.w3.org/2004/02/skos/core#",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.w3.org/2004/02/skos/core#"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("It is highly recommended to accept the default for this field unless there is an actionable reason for not doing so.")]),e._v(" "),r("h3",{attrs:{id:"range-type"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#range-type"}},[e._v("#")]),e._v(" Range/Type")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("Only editable at the time of property creation.")])]),e._v(" "),r("p",[e._v("The "),r("em",[e._v("range/type")]),e._v(" field defines the property type. Certain range/types allow for further customization of the property. The following values are available for this field:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Lang-String")]),e._v(" - An RDF schema lang string as defined by "),r("a",{attrs:{href:"http://www.w3.org/2000/01/rdf-schema#langString",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.w3.org/2000/01/rdf-schema#langString"),r("OutboundLink")],1),e._v(".\n"),r("ul",[r("li",[e._v("Selecting this value opens the "),r("em",[e._v("One Entry Per Language")]),e._v(" property field")])])]),e._v(" "),r("li",[r("strong",[e._v("URL")]),e._v(" - A schema.org URL as defined by "),r("a",{attrs:{href:"http://schema.org/URL",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://schema.org/URL"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("strong",[e._v("Text")]),e._v(" - A schema.org Text (plain string) value as defined by "),r("a",{attrs:{href:"http://schema.org/Text",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://schema.org/Text"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("Selecting this value opens the "),r("em",[e._v("Limit Values")]),e._v(" property field")])])]),e._v(" "),r("li",[r("strong",[e._v("Date-Time")]),e._v(" - A w3.org dateTime value as defined by "),r("a",{attrs:{href:"http://www.w3.org/2001/XMLSchema#dateTime",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.w3.org/2001/XMLSchema#dateTime"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("strong",[e._v("Date")]),e._v(" - A dublin core date value as defined by "),r("a",{attrs:{href:"http://purl.org/dc/terms/date",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://purl.org/dc/terms/date"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("strong",[e._v("SKOS Concept")]),e._v(" - A CaSS concept value as defined by "),r("a",{attrs:{href:"https://schema.cassproject.org/0.4/skos/Concept",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://schema.cassproject.org/0.4/skos/Concept"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"display-priority"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#display-priority"}},[e._v("#")]),e._v(" Display Priority")]),e._v(" "),r("p",[e._v("The priority in which the property is displayed in form inputs (primary, secondary, or tertiary).")]),e._v(" "),r("h3",{attrs:{id:"required"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#required"}},[e._v("#")]),e._v(" Required")]),e._v(" "),r("p",[e._v("The property is required toggle.")]),e._v(" "),r("h3",{attrs:{id:"unique-property-identifier"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unique-property-identifier"}},[e._v("#")]),e._v(" Unique Property Identifier")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("Only editable at the time of property creation.")])]),e._v(" "),r("p",[e._v("The name of the property in the data record. Only alphanumerics are allowed.")]),e._v(" "),r("h3",{attrs:{id:"display-label"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#display-label"}},[e._v("#")]),e._v(" Display Label")]),e._v(" "),r("p",[e._v("The label to be displayed in form inputs for the property.")]),e._v(" "),r("h3",{attrs:{id:"description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),r("p",[e._v("The description of the property.")]),e._v(" "),r("h3",{attrs:{id:"display-category"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#display-category"}},[e._v("#")]),e._v(" Display Category")]),e._v(" "),r("p",[e._v("The category (if any) under which the property is displayed in form inputs.")]),e._v(" "),r("h3",{attrs:{id:"one-entry-per-language"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#one-entry-per-language"}},[e._v("#")]),e._v(" One Entry Per Language")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("Only available for range/type Lang-String")])]),e._v(" "),r("p",[r("img",{attrs:{src:"/cass-editor/docs/one-entry-per-language.png",alt:"One Entry Per Language"}})]),e._v(" "),r("p",[e._v("By toggling this field on, custom properties of the "),r("em",[e._v("range/type Lang-String")]),e._v(" can be limited so that only a single entry can be made per language chosen.")]),e._v(" "),r("h3",{attrs:{id:"limit-values"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#limit-values"}},[e._v("#")]),e._v(" Limit Values")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("Only available for range/type Text")])]),e._v(" "),r("p",[e._v("When creating a custom property of "),r("em",[e._v("range/type Text")]),e._v(", you can limit the values allowed to the property. To do this, toggle the "),r("em",[e._v("Limit Values")]),e._v(" field on and click the "),r("em",[e._v("add")]),e._v(" button to begin managing the list of allowable values.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/cass-editor/docs/limit-values-competency.png",alt:"Limit Values"}})]),e._v(" "),r("p",[e._v("For each entry in the limit values table, a "),r("em",[e._v("display label")]),e._v(" and "),r("em",[e._v("field value")]),e._v(" must be entered.")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("display label")]),e._v(" - the label displayed to the user when selecting the value")]),e._v(" "),r("li",[r("strong",[e._v("field value")]),e._v(" - the recorded value when the value is selected by the user\n"),r("ul",[r("li",[e._v("Only alphanumerics are allowed for field values")])])])]),e._v(" "),r("p",[r("img",{attrs:{src:"/cass-editor/docs/limit-values-enabled-competency.png",alt:"Limit Values Enabled"}})]),e._v(" "),r("h2",{attrs:{id:"applying-the-custom-competency-property"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#applying-the-custom-competency-property"}},[e._v("#")]),e._v(" Applying the Custom Competency Property")]),e._v(" "),r("p",[e._v("Once complete, the new property can be applied to the framework by clicking the "),r("em",[e._v("apply new property")]),e._v(" in the lower right corner of the dialogue window.")]),e._v(" "),r("h2",{attrs:{id:"editing-deleting-custom-competency-properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#editing-deleting-custom-competency-properties"}},[e._v("#")]),e._v(" Editing/Deleting Custom Competency Properties")]),e._v(" "),r("p",[e._v("Custom properties can be edited and deleted by selecting the appropriate action buttons to the right of the corresponding property entry in the "),r("em",[e._v("Competency Properties")]),e._v(" list.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/cass-editor/docs/competency-properties.png",alt:"Delete Custom Properties"}})]),e._v(" "),r("h2",{attrs:{id:"restrict-competency-types"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#restrict-competency-types"}},[e._v("#")]),e._v(" Restrict Competency Types")]),e._v(" "),r("p",[e._v("By default, values for the competency "),r("em",[e._v("type")]),e._v(" property are not limited. By toggling this setting, competency types can be restricted to a list of predetermined values.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/cass-editor/docs/restrict-competency-types.png",alt:"Restrict Competency Types"}})]),e._v(" "),r("p",[e._v("For each entry in the permitted values table, a "),r("em",[e._v("display label")]),e._v(" and "),r("em",[e._v("field value")]),e._v(" must be entered.")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("display label")]),e._v(" - the label displayed to the user when selecting the type value")]),e._v(" "),r("li",[r("strong",[e._v("field value")]),e._v(" - the recorded value when the type is selected by the user\n"),r("ul",[r("li",[e._v("Only alphanumerics are allowed for field values")])])])]),e._v(" "),r("p",[r("img",{attrs:{src:"/cass-editor/docs/permitted-values.png",alt:"Permitted Values Table"}})]),e._v(" "),r("h2",{attrs:{id:"competency-levels"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#competency-levels"}},[e._v("#")]),e._v(" Competency Levels")]),e._v(" "),r("p",[e._v("By default, the level property is enabled for competency objects created in the CaSS Authoring Tool. Levels can be disabled by toggling the "),r("em",[e._v("allow levels")]),e._v(" switch.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/cass-editor/docs/allow-levels.png",alt:"Allow Levels"}})]),e._v(" "),r("h2",{attrs:{id:"level-property-fields"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#level-property-fields"}},[e._v("#")]),e._v(" Level Property Fields")]),e._v(" "),r("p",[e._v("Level property fields can be modified from the "),r("em",[e._v("allow levels")]),e._v(" section of the competency configuration settings:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("display label")]),e._v(" - label to be displayed in form inputs for levels")]),e._v(" "),r("li",[r("strong",[e._v("description")]),e._v(" - description of the levels property")]),e._v(" "),r("li",[r("strong",[e._v("display category")]),e._v(" - category (if any) under which levels are displayed in form inputs")]),e._v(" "),r("li",[r("strong",[e._v("level display priority")]),e._v(" - priority in which levels are displayed in form inputs (primary, secondary, or tertiary)")])]),e._v(" "),r("h2",{attrs:{id:"restrict-competency-levels"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#restrict-competency-levels"}},[e._v("#")]),e._v(" Restrict Competency Levels")]),e._v(" "),r("p",[e._v("By default, levels in CaSS can be created during framework/competency editing. To restrict competencies that allow levels to a limited selection, toggle the "),r("em",[e._v("restrict level values")]),e._v(" switch and click the "),r("em",[e._v("manage levels")]),e._v(" button.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/cass-editor/docs/restrict-levels.png",alt:"Restrict Competency Levels"}})]),e._v(" "),r("h3",{attrs:{id:"manage-competency-levels"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#manage-competency-levels"}},[e._v("#")]),e._v(" Manage Competency Levels")]),e._v(" "),r("p",[e._v("Clicking the "),r("em",[e._v("manage levels")]),e._v(" button displays the "),r("em",[e._v("select enforced levels")]),e._v(" dialogue screen. From here, you can select from all existing levels in CaSS or create more appropriate levels. Any previously selected levels will already be checked and can be removed from the enforced levels list by unchecking the appropriate item.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/cass-editor/docs/enforced-levels.png",alt:"Enforced Levels"}})]),e._v(" "),r("h3",{attrs:{id:"add-competency-levels"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#add-competency-levels"}},[e._v("#")]),e._v(" Add Competency Levels")]),e._v(" "),r("p",[e._v("To add a new level to the available level list, click on the "),r("em",[e._v("add level")]),e._v(" button in the "),r("em",[e._v("select enforced levels")]),e._v(" dialogue window.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/cass-editor/docs/add-level.png",alt:"Add Levels"}})]),e._v(" "),r("p",[e._v("Once clicked, the "),r("em",[e._v("add new level")]),e._v(" dialogue is open. Enter the new level "),r("strong",[e._v("name")]),e._v(" (and optionally the new level "),r("strong",[e._v("description")]),e._v(" ). Clicking the "),r("em",[e._v("save new level")]),e._v(" button on the bottom right corner of the dialogue will create this level in CaSS and return you to the "),r("em",[e._v("select enforced levels")]),e._v(" dialogue.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/cass-editor/docs/add-new-level.png",alt:"Add New Level Modal"}})]),e._v(" "),r("h3",{attrs:{id:"apply-selected-competency-levels"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#apply-selected-competency-levels"}},[e._v("#")]),e._v(" Apply Selected Competency Levels")]),e._v(" "),r("p",[e._v("Upon selecting the desired enforced levels, click the "),r("em",[e._v("apply selected")]),e._v(" button at the bottom right of the "),r("em",[e._v("select enforced levels")]),e._v(" dialog window to apply the enforced levels to competencies.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/cass-editor/docs/apply-selected.png",alt:"Select Enforced Levels"}})]),e._v(" "),r("h2",{attrs:{id:"competency-relationships-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#competency-relationships-configuration"}},[e._v("#")]),e._v(" Competency Relationships Configuration")]),e._v(" "),r("p",[e._v("Relationships can be added as properties on competencies to define how competencies within a framework relate to each other. Enabled relationships will be available in the property drop down when editing competencies in the framework editor.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/cass-editor/docs/competency-relationships-configuration.png",alt:"Competnecy Relationship Configuration"}})]),e._v(" "),r("h3",{attrs:{id:"relationship-display-options"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#relationship-display-options"}},[e._v("#")]),e._v(" Relationship Display Options")]),e._v(" "),r("p",[e._v("General relationship display options can be configured from the "),r("em",[e._v("display options section")]),e._v(". These include:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("display category")]),e._v(" - category (if any) under which relationships are displayed in form inputs")]),e._v(" "),r("li",[r("strong",[e._v("relationships display priority")]),e._v(" - priority in which relationships are displayed in form inputs (primary, secondary, or tertiary)")])]),e._v(" "),r("p",[r("img",{attrs:{src:"/cass-editor/docs/display-options.png",alt:"Relationship Display Options"}})]),e._v(" "),r("h3",{attrs:{id:"relationship-type-management"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#relationship-type-management"}},[e._v("#")]),e._v(" Relationship Type Management")]),e._v(" "),r("p",[e._v("The types of relationships available to competencies using the configuration can be managed under the "),r("em",[e._v("relationship types")]),e._v(" section. Relationship types can be enabled, disabled and relabeled.")]),e._v(" "),r("p",[e._v("By default, the following relationship types are enabled:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("isEnabledBy")])]),e._v(" "),r("li",[r("strong",[e._v("requires")])]),e._v(" "),r("li",[r("strong",[e._v("desires")])]),e._v(" "),r("li",[r("strong",[e._v("narrows")])]),e._v(" "),r("li",[r("strong",[e._v("isRelatedTo")])]),e._v(" "),r("li",[r("strong",[e._v("isEquivalentTo")])])]),e._v(" "),r("p",[r("img",{attrs:{src:"/cass-editor/docs/relationship-types.png",alt:"Relationship Types Management"}})]),e._v(" "),r("p",[e._v("To reduce screen clutter, the "),r("em",[e._v("relationship types")]),e._v(" section only displays enabled relationship types. Currently enabled relationships can be disabled using the corresponding "),r("em",[e._v("enabled")]),e._v(" switch to the right of the relationship entry.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/cass-editor/docs/relationship-types-enabled.png",alt:"Relationship Types Enabled Toggle"}})]),e._v(" "),r("p",[e._v("To add other relationship types to a configuration, click on the "),r("em",[e._v("manage relationships")]),e._v(" button on the upper right of the "),r("em",[e._v("relationship types")]),e._v(" section.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/cass-editor/docs/manage-relationships.png",alt:"Manage Relationships"}})]),e._v(" "),r("p",[e._v("Once clicked, the "),r("em",[e._v("manage relationship types")]),e._v(" dialogue window is open. From this screen, all relationships type currently available in CaSS are categorized and displayed.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/cass-editor/docs/relationship-types.png",alt:"Manage Relationship Types"}})]),e._v(" "),r("p",[e._v("The available relationship types are as follows:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("CaSS Default Relationships")]),e._v(" "),r("ul",[r("li",[e._v("isEnabledBy")]),e._v(" "),r("li",[e._v("requires")]),e._v(" "),r("li",[e._v("desires")]),e._v(" "),r("li",[e._v("narrows")]),e._v(" "),r("li",[e._v("isRelatedTo")]),e._v(" "),r("li",[e._v("isEquivalentTo")]),e._v(" "),r("li",[e._v("broadens")]),e._v(" "),r("li",[e._v("enables")])])]),e._v(" "),r("li",[r("strong",[e._v("Achievement Standards Network Relationships")]),e._v(" "),r("ul",[r("li",[e._v("majorRelated")]),e._v(" "),r("li",[e._v("minorRelated")])])]),e._v(" "),r("li",[r("strong",[e._v("GEMQ")]),e._v(" "),r("ul",[r("li",[e._v("hasChild")]),e._v(" "),r("li",[e._v("isChildOf")])])]),e._v(" "),r("li",[r("strong",[e._v("Other")]),e._v(" "),r("ul",[r("li",[e._v("isSimilarTo")]),e._v(" "),r("li",[e._v("isPartiallySameAs")])])])]),e._v(" "),r("p",[e._v("To enable or disable a relationship type for the configuration, toggle the "),r("em",[e._v("enabled")]),e._v(" switch to the right of the corresponding type and click the "),r("em",[e._v("ok")]),e._v(" button.")]),e._v(" "),r("h2",{attrs:{id:"resource-alignment-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#resource-alignment-configuration"}},[e._v("#")]),e._v(" Resource Alignment Configuration")]),e._v(" "),r("p",[e._v("Resource alignment terms are used to map resources such as learning material, courses, and other content to competencies in CAT. If enabled, the alignment type property will show up in the framework editor when aligning competencies to resources.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/cass-editor/docs/resource-alignment-configuration.png",alt:"Resource Alignemnt Configuration"}})]),e._v(" "),r("p",[e._v("Currently, the CaSS Authoring Tool supports four types of resource alignments:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("teaches")]),e._v(" - The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term")]),e._v(" "),r("li",[r("strong",[e._v("assesses")]),e._v(" - The learning resource being described may be used to assess the competency being referenced")]),e._v(" "),r("li",[r("strong",[e._v("requires")]),e._v(" - The competency being referenced is required in order for effective outcome of the learning resource being described")]),e._v(" "),r("li",[r("strong",[e._v("desires")]),e._v(" - Knowledge of the learning resource being described is desired by the competency being referenced")])]),e._v(" "),r("p",[e._v("Each alignment type can be enabled and disabled by toggling the "),r("em",[e._v("enabled")]),e._v(" switch to the right of each corresponding item.")])])}),[],!1,null,null,null);t.default=s.exports}}]);