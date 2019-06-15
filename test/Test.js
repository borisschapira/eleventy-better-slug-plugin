import test from "ava";
import { betterSlug } from "../src/better-slug";

test("Removes reserved characters", async t => {
  t.deepEqual(betterSlug("."), "");
  t.deepEqual(betterSlug("~"), "");
  t.deepEqual(betterSlug("\""), "");
  t.deepEqual(betterSlug(":"), "");
  t.deepEqual(betterSlug(","), "");
  t.deepEqual(betterSlug(";"), "");
  t.deepEqual(betterSlug("/"), "");
  t.deepEqual(betterSlug("?"), "");
  t.deepEqual(betterSlug("="), "");
  t.deepEqual(betterSlug("#"), "");
  t.deepEqual(betterSlug("["), "");
  t.deepEqual(betterSlug("]"), "");
  t.deepEqual(betterSlug("{"), "");
  t.deepEqual(betterSlug("}"), "");
  t.deepEqual(betterSlug("("), "");
  t.deepEqual(betterSlug(")"), "");
  t.deepEqual(betterSlug("@"), "");
  t.deepEqual(betterSlug("!"), "");
  t.deepEqual(betterSlug("'"), "");
  t.deepEqual(betterSlug("*"), "");
  t.deepEqual(betterSlug("+"), "");
});

test("Replacements", async t => {
  t.deepEqual(betterSlug("<"), "less");
  t.deepEqual(betterSlug(">"), "greater");
  t.deepEqual(betterSlug("&"), "and");

  // Currencies
  t.deepEqual(betterSlug("$"), "dollar");
  t.deepEqual(betterSlug("£"), "pound");
  t.deepEqual(betterSlug("€"), "euro");
});

test("Idioms", async t => {
  t.deepEqual(betterSlug("John's car"), "johns-car");
  t.deepEqual(betterSlug("10 O'Clock Live"), "10-oclock-live");
  t.deepEqual(betterSlug("E!"), "e");
});
