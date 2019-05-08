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

const prod = require('./prod.config');

module.exports = {
    API_PATH: JSON.stringify('http://localhost:2222/api/v0'),
    API_TOKEN_COOKIE: JSON.stringify('rbbtoken'),
    API_TOKEN_COOKIE_DOMAIN: JSON.stringify('localhost'),
    API_SECURE: false,
    VERSION_MINOR: prod.VERSION_MINOR,
    VERSION_MAJOR: prod.VERSION_MAJOR,
    VERSION_REVISION: prod.VERSION_REVISION,
    DEVELOPMENT: 'true'
};
