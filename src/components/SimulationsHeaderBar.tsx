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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SimulationsHeaderBar extends React.Component<{onSimulateClick: () => void}, {}> {

  constructor(props: any, context?: any) {
    super(props, context);
  }

  render() {
    // TODO: Put style in stylesheet
    return <div style={{lineHeight: "40px", padding: "0px 10px"}}>
      <button onClick={this.props.onSimulateClick} type="button" className="btn btn-outline-success btn-sm">
        <FontAwesomeIcon icon={['far', 'plus-square']} /> Simulate</button>
    </div>;
  }
}
