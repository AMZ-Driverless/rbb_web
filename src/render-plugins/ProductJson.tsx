/*
 * AMZ-Driverless
 * Copyright (c) 2019 Authors:
 *   - Huub Hendrikx <hhendrik@ethz.ch>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import * as React from 'react';
import * as Models from 'client/api';
import ProductCard from "components/ProductCard";
import { PluginRegistry, RenderPlugin } from "render-plugins/RenderPlugin";
import JSONFormatter from "json-formatter-js";

function renderProductJson(product: Models.Product, input: HTMLDivElement) {
  if (input) {
    while (input.firstChild) {
      input.removeChild(input.firstChild);
    }
    input.appendChild((new JSONFormatter(product)).render());
  }
}

export default class ProductJson extends RenderPlugin {
  register(registry: PluginRegistry): void {
    // This plugin is only used if no other can be found
  }

  renderContent(product: Models.Product, bag: Models.BagDetailed, storeName: string): any {
    return <ProductCard product={product}>
      <div className={"card-body-inner"}>
        <h6>No plugin found!</h6>
        <div ref={(input) => {
          renderProductJson(product, input);
        }}/>
      </div>
    </ProductCard>;
  }
}
