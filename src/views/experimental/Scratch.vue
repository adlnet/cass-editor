<template>
    <div id="container">
        <h1>Answering a question given data, frameworks, and (the rules written here) Editor</h1>
        <BlocklyComponent
            id="blockly"
            ref="foo">
            <block type="true_if" />
            <block type="has_true_assertion" />
            <block type="has_true_assertion_within" />
            <block type="has_false_assertion" />
            <block type="logic_operation" />
            <block type="logic_negate" />
            <block type="https://dev.api.cassproject.org/api/data/schema.cassproject.org.0.4.Competency/0217f483-974b-4013-8196-68c07aa1ef9c" />
            <block type="https://dev.api.cassproject.org/api/data/schema.cassproject.org.0.4.Competency/22abc12d-c740-4ef6-9c7a-4e9d7720dada" />
        </BlocklyComponent>
        <h1>How do we know when to make an assertion given data that comes in Editor</h1>
        <BlocklyComponent
            id="blockly2"
            ref="foo2">
            <block type="assertion_if" />
            <block type="xapi" />
            <block type="xapi_verb" />
            <block type="xapi_object" />
        </BlocklyComponent>


        <button @click="showCode()">
            Show JavaScript
        </button>
        <pre v-html="code" />
    </div>
</template>

<script>

import * as Blockly from 'blockly/core';
import BlocklyComponent from '../../components/BlocklyComponent.vue';
import BlocklyJS from 'blockly/javascript';

Blockly.Blocks["true_if"] = {
    init: function() {
        this.appendValueInput("Boolean")
            .setCheck("Boolean")
            .appendField("True if");
        this.setOutput(false);
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setColour(190);
    }
};

Blockly.Blocks["assertion_if"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Generate a ").appendField(new Blockly.FieldDropdown([["positive", "TRUE"], ["negative", "FALSE"]]), "Positive");
        this.appendValueInput("Boolean")
            .setCheck("Boolean")
            .appendField("assertion if");
        this.setOutput(false);
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setColour(190);
    }
};

Blockly.Blocks["xapi"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("We receive an xAPI statement where");
        this.setOutput(true, "Boolean");
        this.setPreviousStatement(false);
        this.setNextStatement(true, "Boolean");
        this.setColour(190);
    }
};
Blockly.Blocks["xapi_verb"] = {
    init: function() {
        this.appendValueInput("Verb")
            .setCheck("Verb")
            .appendField("the verb is");
        this.setPreviousStatement(true, "Boolean");
        this.setNextStatement(true, "Boolean");
        this.setColour(190);
    }
};
Blockly.Blocks["xapi_object"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("the object.id is ").appendField(new Blockly.FieldTextInput(""), "Object");
        this.setPreviousStatement(true, "Boolean");
        this.setNextStatement(true, "Boolean");
        this.setColour(190);
    }
};
Blockly.Blocks["has_true_assertion"] = {
    init: function() {
        this.appendValueInput("Competency")
            .setCheck("Competency")
            .appendField("There is a positive assertion on");
        this.setOutput(true);
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setColour(190);
    }
};
Blockly.Blocks["has_true_assertion_within"] = {
    init: function() {
        this.appendValueInput("Competency")
            .setCheck("Competency")
            .appendField("There is a positive assertion on");
        this.appendValueInput("Competency")
            .setCheck("Competency")
            .appendField("within").appendField(new Blockly.FieldNumber(0), "Number").appendField(" seconds of ");
        this.setOutput(true);
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setColour(190);
    }
};
Blockly.Blocks["has_false_assertion"] = {
    init: function() {
        this.appendValueInput("Competency")
            .setCheck("Competency")
            .appendField("There is a negative assertion on");
        this.setOutput(true);
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setColour(190);
    }
};

Blockly.Blocks["https://dev.api.cassproject.org/api/data/schema.cassproject.org.0.4.Competency/0217f483-974b-4013-8196-68c07aa1ef9c"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Personal Effectiveness");
        this.setOutput(true, "Competency");
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setColour(300);
        this.setTooltip("buy id");
        this.setHelpUrl("https://example.com");
    }
};

Blockly.Blocks["https://dev.api.cassproject.org/api/data/schema.cassproject.org.0.4.Competency/22abc12d-c740-4ef6-9c7a-4e9d7720dada"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Know what to communicate to the site supervisor/personnel on needs/requirements for inspection");
        this.setOutput(true, "Competency");
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setColour(300);
        this.setTooltip("buy id");
        this.setHelpUrl("https://example.com");
    }
};

Blockly.Blocks["stock_buy_simple"] = {
    init: function() {
        this.appendValueInput("Number")
            .setCheck("Number")
            .appendField("Buy Stock ID")
            .appendField(new Blockly.FieldNumber(0), "ID")
            .appendField("For amount")
            .appendField(new Blockly.FieldNumber(0), "Amount")
            .appendField("At Price")
            .appendField(new Blockly.FieldNumber(0), "Price");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, "String");
        this.setColour(230);
        this.setTooltip("buy id");
        this.setHelpUrl("https://example.com");
    }
};

Blockly.JavaScript["stock_buy_simple"] = function(block) {
    var number_id = block.getFieldValue("ID");
    var number_amount = block.getFieldValue("Amount");
    var number_price = block.getFieldValue("Price");
    var value_number = Blockly.JavaScript.valueToCode(
        block,
        "Number",
        Blockly.JavaScript.ORDER_ATOMIC
    );
    var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
    return code;
};

Blockly.Blocks["stock_buy_prog"] = {
    init: function() {
        this.appendValueInput("Number")
            .setCheck("Number")
            .appendField("Buy Stock ID");
        this.appendValueInput("NAME")
            .setCheck("Number")
            .appendField("For amount");
        this.appendValueInput("NAME")
            .setCheck("Number")
            .appendField("At Price");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, "String");
        this.setColour(230);
        this.setTooltip("buy id");
        this.setHelpUrl("https://example.com");
    }
};

Blockly.JavaScript["stock_buy_prog"] = function(block) {
    var value_number = Blockly.JavaScript.valueToCode(
        block,
        "Number",
        Blockly.JavaScript.ORDER_ATOMIC
    );
    var value_name = Blockly.JavaScript.valueToCode(
        block,
        "NAME",
        Blockly.JavaScript.ORDER_ATOMIC
    );
    var code = `buy(${value_number},${value_name},${value_name});\n`;
    return code;
};

Blockly.Blocks["stock_fetch_price"] = {
    init: function() {
        this.appendValueInput("Fetch")
            .setCheck("Number")
            .appendField("Fetch Price of Stock ID:");
        this.appendDummyInput()
            .appendField("And set to:")
            .appendField(new Blockly.FieldVariable("item"), "variable");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("fetch stock price");
        this.setHelpUrl("https://example.com");
    }
};

Blockly.JavaScript["stock_fetch_price"] = function(block) {
    var value_fetch = Blockly.JavaScript.valueToCode(
        block,
        "Fetch",
        Blockly.JavaScript.ORDER_ATOMIC
    );
    var variable_variable = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue("variable"),
        Blockly.Variables.NAME_TYPE
    );
    var code = `fetch_price(${value_fetch},${variable_variable});\n`;
    return code;
};
export default {
    name: 'Scratch',
    components: {
        BlocklyComponent
    },
    data() {
        return {
            code: '',
            options: {
                media: 'media/',
                grid:
          {
              spacing: 25,
              length: 3,
              colour: '#ccc',
              snap: true
          },
                toolbox:
        `<xml>
          <category name="Logic" colour="%{BKY_LOGIC_HUE}">
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
            <block type="logic_negate"></block>
            <block type="logic_boolean"></block>
          </category>
          <category name="Loops" colour="%{BKY_LOOPS_HUE}">
            <block type="controls_repeat_ext">
              <value name="TIMES">
                <block type="math_number">
                  <field name="NUM">10</field>
                </block>
              </value>
            </block>
            <block type="controls_whileUntil"></block>
          </category>
          <category name="Math" colour="%{BKY_MATH_HUE}">
            <block type="math_number">
              <field name="NUM">123</field>
            </block>
            <block type="math_arithmetic"></block>
            <block type="math_single"></block>
          </category>
          <category name="Text" colour="%{BKY_TEXTS_HUE}">
            <block type="text"></block>
            <block type="text_length"></block>
            <block type="text_print"></block>
          </category>
          <category name="Variables" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}">
            </category>
          <category name="Stocks" colour="%{BKY_LOOPS_HUE}">
            <block type="stock_buy_simple"></block>
            <block type="stock_buy_prog"></block>
            <block type="stock_fetch_price"></block>
          </category>
        </xml>`
            }
        };
    },
    methods: {
        showCode() {
            this.code = BlocklyJS.workspaceToCode(this.$refs["foo"].workspace);
        }
    }
};

</script>

<style scoped>
#blockly {
  height: 40vh;
}
#blockly2 {
  height: 40vh;
}
#code {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 50%;
  margin: 0;
  background-color: beige;
}
</style>
